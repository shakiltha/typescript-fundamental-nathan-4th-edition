// await syntax
export function delayedPromise(): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: () => void) => {
    setTimeout(() => {
      console.log(`2. calling resolve()`);
      resolve();
    }, 2000);
  });
}

async function callDelayedPromise() {
  console.log(`1. before calling delayedPromise`);
  await delayedPromise();
  console.log(`3. after calling delayedPromise`);
}

callDelayedPromise();
