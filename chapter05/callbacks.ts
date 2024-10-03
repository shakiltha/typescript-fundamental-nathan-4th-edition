// callbacks

function delayResponseWithCallback(callback: () => void) {
  function executeAfterTimeout() {
    console.log(`5. executeAfterTimeout`);
    callback();
  }
  console.log(`2. calling setTimeout`);
  setTimeout(executeAfterTimeout, 2000);
  console.log(`3. after calling setTimeout`);
}

function callDelayAndWait() {
  function afterWait() {
    console.log(`6. afterWait()`);
  }
  console.log(`1. calling delayResponseWithCallback`);
  delayResponseWithCallback(afterWait);
  console.log(`4. after calling delayResponseWithCallback`);
}

callDelayAndWait();
