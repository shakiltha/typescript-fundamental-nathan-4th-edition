// optional parameters

function concatValues(a: string, b?: string) {
  console.log(`a + b = ${a + b}`);
}

concatValues("first", "second");
concatValues("third");

// default parameters

function concatWithDefault(a: string, b: string = "default") {
  console.log(`a + b = ${a + b}`);
}

concatWithDefault("first", "second");
concatWithDefault("third ");

// rest parameters
function testArguments(...args: string[] | number[]) {
  for (let i in args) {
    console.log(`args[${i}] = ${args[i]}`);
  }
}

testArguments(1, 2);
testArguments("first", "second", "third");

// function signatures as parameters
function myCallback(text: string): void {
  console.log(`myCallback called with ${text}`);
}

function withCallbackArg(message: string, callbackFn: (text: string) => void) {
  console.log(`withCallback called, message: ${message}`);
  callbackFn(`${message} from withCallback`);
}

withCallbackArg("initial text", myCallback);
// withCallbackArg("initial text", "this is not a function");

// function overrides
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
  return a + b;
}
console.log(add("first", "second"));
console.log(add(1, 2));
// console.log(add(true, false));
