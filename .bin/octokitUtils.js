const { Octokit } = require('@octokit/rest');
const joinURLs = require('url-join');
const fetch = require('node-fetch');

const {
  OWNER,
  EXERCISE_REPO_NAME,
  GITHUB_API_KEY,
  JS_EXERCISES_FOLDER_NAME,
} = require('./config');

const octokit = new Octokit({ auth: GITHUB_API_KEY });

async function listFilesOf(questionName) {
  let result = [];
  let files;

  try {
    const { data } = await octokit.repos.getContents({
      owner: OWNER,
      repo: EXERCISE_REPO_NAME,
      path: questionName,
    });
    files = data;
  } catch (ex) {
    if (ex.status === 404) {
      return [];
    }
    throw ex;
  }

  for (const fileOrFolder of files) {
    const { type, path } = fileOrFolder;
    if (type === 'dir') {
      const subFolderFiles = await listFilesOf(path);
      result = result.concat(subFolderFiles);
    } else {
      const file = fileOrFolder;
      result.push(file);
    }
  }

  return result;
}

async function fetchFilesOf({
  questionName,
  exercisesFolderInRepo = JS_EXERCISES_FOLDER_NAME,
}) {
  const questionPath = joinURLs(exercisesFolderInRepo, questionName);
  const allFilesToDownload = await listFilesOf(questionPath);

  return Promise.all(
    allFilesToDownload.map(
      async ({ name, download_url: downloadURL, path }) => {
        const fileResponse = await fetch(downloadURL);
        const fileArrayBuffer = await fileResponse.arrayBuffer();
        return { name, path, fileArrayBuffer };
      }
    )
  );
}

module.exports = {
  fetchFilesOf,
  listFilesOf,
};
