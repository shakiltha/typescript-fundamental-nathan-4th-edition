let version: string = "es6";
console.log(`hello ${version} TypeScript`);

let myString: string = "this is a string";

// basic types

let myBoolean: boolean = true;
let myNumber: number = 1234;
let myStringArray: string[] = [`first`, `second`, `third`];

// error
// myBoolean = myNumber;
// myStringArray = myNumber;
// myNumber = myStringArray[0]

// fixing
myBoolean = myNumber === 234;
myStringArray = [myNumber.toString(), `4567`];
myNumber = myStringArray.length;

console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);

// Inferred Typing
let inferredString = "this is a string";
let inferredNumber = 1;

// Type 'string' is not assignable to type 'number'
// inferredNumber = inferredString;

// Duck Typing

let nameIdObject = { name: "MyName", id: 1, print() {} };
nameIdObject = { id: 2, name: "anotherName", print() {} };

// nameIdObject = {id: 3, name: "thirdname"};

let obj1 = { id: 1, print() {} };
let obj2 = { id: 2, print() {}, select() {} };
obj1 = obj2;
// obj2 = obj1;

// Function signatures and void
// function calculate(a, b, c) {
//   return a * b + c;
// }

// console.log("calculate() = " + calculate(2, 3, 1));
// console.log("calculate() = " + calculate("2", "3", "1"));

function calculate(a: number, b: number, c: number): number {
  return a * b + c;
}

console.log(`calculate() = ${calculate(3, 2, 1)}`);
// console.log(`calculate() = ${calculate(3, 2, 1)}`) // this will fail

// if you don't want to return anything use "void"

/**
 * Given a string value, log it to the console
 * @param a The input string.
 */
function printString(a: string): void {
  console.log(a);
}

// let returnedValue: string = printString("this is a string"); // string is not assignable to type void

import { checkbox, Separator, input } from "@inquirer/prompts";

// checkbox prompt
const checkBox = async () => {
  const answer = await checkbox({
    message: "Select a package manager",
    choices: [
      { name: "npm", value: "npm" },
      { name: "yarn", value: "yarn" },
      new Separator("--separator--"),
      { name: "pnpm", value: "pnpm", disabled: true },
      {
        name: "pnpm",
        value: "pnpm",
        disabled: "(pnpm is not available)",
      },
    ],
  });
  console.log(answer);
};

checkBox();
