const Path = require('path');
const fs = require('fs').promises;
const { red, bgGreen, bgYellowBright } = require('chalk');
const mkdirp = require('mkdirp');
const toKebabCase = require('lodash/fp/kebabCase');
const initial = require('lodash/fp/initial');
const getLastElementOf = require('lodash/fp/last');

const { fetchFilesOf } = require('./octokitUtils');
const { cmdGet } = require('./cmdGet');
const { input } = require('./input');
const {
  invalidQuestionNameMessage,
  noFilePresentMessage,
} = require('./errorMessages');
const { GITHUB_API_KEY, ALL_QUESTION_TYPES } = require('./config');
const { warn, error, info, success } = require('./chalkLogs');
const { repoHasUpdates, getCurrentBranch } = require('./updateRepo');

function isKebabCase(str) {
  return toKebabCase(str) === str;
}

function setUpUngracefulExit(exitCode = 1) {
  process.exitCode = exitCode;
}

async function writeFileTo(folderPath, filename, arrayBuffer) {
  await mkdirp(folderPath);

  const filePath = Path.join(folderPath, filename);
  await fs.writeFile(filePath, new Uint8Array(arrayBuffer));
}

function getQuestionType(questionName) {
  const nameParts = questionName.split('-');
  const last = getLastElementOf(nameParts);
  if (ALL_QUESTION_TYPES.includes(last)) {
    return last;
  }
  return 'js'; // default question type
}

function buildExerciseFolderName(questionName) {
  return `${getQuestionType(questionName)}-exercises`;
}

async function main() {
  if (GITHUB_API_KEY === undefined) {
    warn(
      'WARNING: Consider adding GITHUB_API_KEY to an .env file in the root directory.'
    );
  }

  const currentBranch = await getCurrentBranch({ verbose: false });
  if (currentBranch === 'master') {
    error('You are currently on the "master" branch.');
    error(`Checkout a different branch and then fetch the question again.`);
    setUpUngracefulExit();
    return;
  }

  if (await repoHasUpdates()) {
    info('Updating the repo ...');
    await cmdGet('npm run update-repo');
    info(`Please fetch the question again. Thanks.`);
    return;
  }

  info('Enter one or more space-separated question names.');
  const questionsString = await input('Questions? ');
  if (questionsString === '') {
    error('The question cannot be an empty string. Please enter a name.\n');
    setUpUngracefulExit()
    return;
  }

  const questions = questionsString.split(' ');

  const invalidQuestionNames = questions.filter(
    question => !isKebabCase(question)
  );

  if (invalidQuestionNames.length > 0) {
    for (const question of invalidQuestionNames) {
      if (!isKebabCase(question)) {
        error(invalidQuestionNameMessage(bgYellowBright(question)));
      }
    }
    setUpUngracefulExit();
    return;
  }

  for (const question of questions) {
    info(`Fetching files of ${question}`);

    const questionFolderName = buildExerciseFolderName(question);
    const allFiles = await fetchFilesOf({
      questionName: question,
      exercisesFolderInRepo: questionFolderName,
    });

    if (allFiles.length === 0) {
      error(noFilePresentMessage(bgYellowBright(question)));
      console.log(bgYellowBright(red(`Skipping ${question}`)));
      console.log('\n');
    } else {
      for (const { name: filename, fileArrayBuffer: fileContent, path } of allFiles) {
        const questionFolderPath = initial(path.split('/')).join('/');
        await writeFileTo(questionFolderPath, filename, fileContent);
        success(`Downloaded file ${filename} at ${questionFolderPath}`);
      }

      const filenames = allFiles.map(({ name }) => name);
      console.log(bgGreen(`Completed. Fetched ${filenames} of ${question}\n`));
    }
  }
}

if (require.main === module) {
  main().catch(console.log);
}
