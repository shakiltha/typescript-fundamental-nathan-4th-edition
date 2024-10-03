// callback syntax
import * as fs from "fs";
fs.readFile("test1.txt", (err, data) => {
  if (err) {
    console.log(`an error occurred : ${err}`);
  } else {
    console.log(`test1.txt contents : ${data}`);
    fs.readFile("test2.txt", (err, data) => {
      if (err) {
        console.log(`an error occurred: ${data}`);
      } else {
        console.log(`test2.txt contents : ${data}`);
        fs.readFile("test3.txt", (err, data) => {
          if (err) {
            console.log(`an error occurred: ${err}`);
          } else {
            console.log(`test3.txt contents : ${data}`);
          }
        });
      }
    });
  }
});

// promise syntax

fs.promises
  .readFile("./test1.txt")
  .then((value) => {
    console.log(`ps test1.txt read : ${value}`);
    return fs.promises.readFile("./test2.txt");
  })
  .then((value) => {
    console.log(`ps test2.txt read : ${value}`);
    return fs.promises.readFile("./test3.txt");
  })
  .then((value) => {
    console.log(`ps test3.txt read : ${value}`);
  })
  .catch((error) => {
    console.log(`an error occurred : ${error}`);
  });

// writing a promise

function fnDelayedPromise(resolve: () => void, reject: () => void) {
  function afterTimeout() {
    resolve();
  }
  setTimeout(afterTimeout, 1000);
}

function delayedResponsePromise(): Promise<void> {
  return new Promise<void>(fnDelayedPromise);
}

function delayedPromise(): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: () => void) => {
    function afterTimeout() {
      resolve();
    }
    setTimeout(afterTimeout, 1000);
  });
}
