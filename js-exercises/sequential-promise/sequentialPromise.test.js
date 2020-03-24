import { sequentialPromise } from './sequentialPromise';

describe('sequentialPromise', () => {
  test('should resolve 3 promises in sequence and return a promise', async () => {
    const p1 = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve('dude');
      }, 1000);
    });

    const p2 = dude => new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${dude}, wheres my car`);
      }, 300);
    });

    const p3 = movieName => new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${movieName} is a terrible movie`);
      }, 0);
    });

    await expect(sequentialPromise([p1, p2, p3]) instanceof Promise).toBe(true);

    await expect(sequentialPromise([p1, p2, p3]))
      .resolves
      .toBe('dude, wheres my car is a terrible movie');
  });

  test('should resolve 2 promises in sequence and return a promise', async () => {
    const p1 = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve('Godfather');
      }, 1000);
    });

    const p2 = movieName => new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${movieName} is an awesome movie`);
      }, 0);
    });

    await expect(sequentialPromise([p1, p2])).resolves.toBe('Godfather is an awesome movie');
  });
});
