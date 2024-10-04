// callback syntax

import { delayedPromise } from "./async-and-await";

function invokeAsync(success: () => void, failure: () => void) {}

function usingCallback() {
  function afterCallbackSuccess() {
    // execute when the callback succeeds
  }
  function afterCallbackFailure() {
    // execute when the callback fails
  }
  // call a function and provide both callbacks
  invokeAsync(afterCallbackSuccess, afterCallbackFailure);
  // code here does not wait for callback to execute
}

// promise syntax
function usingPromise() {
  delayedPromise()
    .then(() => {
      // execute on success
    })
    .catch(() => {
      // execute on error
    });
  // code here does not wait for promise to return
}

// async await syntax

async function usingAsync() {
  try {
    await delayedPromise();
  } catch (error) {
    // execute on error
  }
  // code here waits for async call to complete
}
