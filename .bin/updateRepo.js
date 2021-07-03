const { cmdGet } = require('./cmdGet');
const { error, info } = require('./chalkLogs');

const upstreamRemoteName = '__upstream';
const upstreamURL = 'https://github.com/pesto-students/pesto-exercise-starter';

const COMMANDS = {
  setUpstream: `git remote add ${upstreamRemoteName} ${upstreamURL}`,
  fetchUpstream: `git fetch ${upstreamRemoteName}`,
  removeRemote: `git remote remove ${upstreamRemoteName}`,
};

async function addUpstreamRemote({ verbose = true } = {}) {
  await cmdGet(COMMANDS.setUpstream, { verbose });
}

async function fetchFromUpstream({ verbose = true } = {}) {
  await cmdGet(COMMANDS.fetchUpstream, { verbose });
}

async function removeUpstreamRemote({ verbose = true } = {}) {
  await cmdGet(COMMANDS.removeRemote, { verbose });
}

async function getNumberOfUpstreamCommits() {
  await addUpstreamRemote({ verbose: false });
  await fetchFromUpstream({ verbose: false });

  const diffCommits = `git rev-list master..${upstreamRemoteName}/master --count`;
  const commitDifferenceCount = await cmdGet(diffCommits, { verbose: false });
  const count = Number.parseInt(commitDifferenceCount.trim(), 10);

  return Number.isNaN(count) ? 0 : count;
}

async function repoHasUpdates() {
  try {
    const count = await getNumberOfUpstreamCommits();

    if (count > 0) {
      return true;
    }
    return false;
  } finally {
    await removeUpstreamRemote({ verbose: false });
  }
}

async function getCurrentBranch({ verbose = false } = {}) {
  const allLocalBranches = await cmdGet('git branch', { verbose });
  const currentBranch = allLocalBranches
    .trim()
    .split('\n')
    .filter(el => el.includes('*'));

  if (currentBranch.length === 0) {
    throw new Error(
      'There is no current branch. Possible scenario: detached HEAD state.'
    );
  }

  const currentBranchName = currentBranch[0];

  // '* ' takes two locations;
  return currentBranchName.slice(2);
}

async function updateRepo() {
  const gitStatusOutput = await cmdGet('git status --porcelain');
  const touchedFiles = gitStatusOutput.split('\n').filter(el => el !== '');
  if (touchedFiles.length > 0) {
    error('These files need to be committed/stashed before the update.');
    for (const file of touchedFiles) {
      const fileData = file.split(' ');
      info(fileData[fileData.length - 1]);
    }
    process.exitCode = 1; // ungraceful exit
  } else {
    try {
      const currentBranch = await getCurrentBranch();

      const numberOfUpstreamCommits = await getNumberOfUpstreamCommits();

      if (numberOfUpstreamCommits > 0) {
        const checkoutMaster = 'git checkout master';
        info(`Checking out master: ${checkoutMaster}`);
        await cmdGet(checkoutMaster);

        const mergeToMaster = `git merge ${upstreamRemoteName}/master`;
        info(`Merging upstream to master: ${mergeToMaster}`);
        await cmdGet(mergeToMaster);

        info('Pushing master to origin');
        await cmdGet('git push origin master');

        if (currentBranch !== 'master') {
          const checkoutPreviousBranch = `git checkout ${currentBranch}`;
          info(
            `Checking out the previous working branch: ${checkoutPreviousBranch}`
          );
          await cmdGet(checkoutPreviousBranch);

          const rebaseOntoMaster = 'git rebase master';
          info(`Rebasing current branch onto master: ${rebaseOntoMaster}`);
          await cmdGet(rebaseOntoMaster);
        } else {
          info(`Please rebase your working branch to account for newer changes
  by running "git rebase master" after checking out your working branch.`);
        }
      }
    } catch (ex) {
      error(`Couldn't update the repository.
Consult https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork
and update manually.`);
    } finally {
      info(`Removing remote: ${COMMANDS.removeRemote}`);
      await removeUpstreamRemote();
    }
  }
}

if (require.main === module) {
  updateRepo().catch(console.log);
}

module.exports = {
  getCurrentBranch,
  updateRepo,
  repoHasUpdates,
};
