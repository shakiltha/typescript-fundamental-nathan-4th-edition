// The any type

// let item1: any = {id: 1, name: "item1"};
// item1 = {id: 2};

// Explicit casting

// let item1 = <any>{id: 1, name: "item1"};

let item1 = { id: 1, name: "item1" } as any;
item1 = { id: 2 };

// The let keyword
// var index: number = 0;
let index = 0;

if (index == 0) {
  //   var index = 2;
  let index = 2;
  console.log(`index inside block = ${index}`);
}

console.log(`index outside block ${index}`);

// const values

const constValue = "this should not be changed";
// constValue = 'newValue';

// union values

function printObject(obj: string | number) {
  console.log(`obj = ${obj}`);
}

printObject(1);
printObject("string value");

// type guards

function addWithTypeGuard(arg1: string | number, arg2: string | number) {
  if (typeof arg1 === "string") {
    console.log(`arg1 is of type string`);
    return arg1 + arg2;
  }
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    // both are numbers
    console.log(`arg1 and arg2 are numbers`);
    return arg1 + arg2;
  }
  console.log(`default return treat both as strings`);
  return arg1.toString() + arg2.toString();
}

console.log(`"1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(`1, 2 = ${addWithTypeGuard(1, 2)}`);
console.log(`1, "2" = ${addWithTypeGuard(1, "2")}`);

// type aliases

type StringOrNumber = string | number;
function addWithTypeAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
  return arg1.toString() + arg2.toString();
}

// enums

enum DoorState {
  Open,
  Closed,
}

function checkDoorState(state: DoorState) {
  console.log(`enum value is: ${state}`);
  switch (state) {
    case DoorState.Open:
      console.log(`Door is open`);
      break;
    case DoorState.Closed:
      console.log(`Door is closed`);
      break;
  }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

enum DoorStateSpecificValues {
  Open = 3,
  Closed = 7,
  Unspecified = 256,
}

// string enums
enum DoorStateString {
  OPEN = "Open",
  CLOSED = "Closed",
}
console.log(`OPEN = ${DoorStateString.OPEN}`);

// const enums
const enum DoorStateConst {
  Open = 10,
  Closed = 20,
}
console.log(`const Open = ${DoorStateConst.Open}`);

// undefined
let array = ["123", "456", "789"];
delete array[0];

for (let i = 0; i < array.length; i++) {
  // array[0] = undefined
  // console.log(`array[${i}] = ${array[i]}`);
  checkAndPrintElement(array[i]);
}

function checkAndPrintElement(arrElement: string | undefined) {
  if (arrElement === undefined) {
    console.log(`invalid array element`);
  } else {
    console.log(`valid array element: ${arrElement}`);
  }
}

// conditional expressions

const value: number = 10;
const message: string =
  value > 10 ? "value is larger than 10" : "value is less than 10";
console.log(message);

// optional chaining: testing for an object property before accessing it

// interface ObjectA {
//   nestedProperty: {
//     name: string;
//   }
// }

// let objetA = {
//   nestedProperty: {
//     name: "nestedPropertyName",
//   },
// };

// function printNestedObject(obj: ObjectA) {
//   console.log("obj.nestedProperty.name = " + obj.nestedProperty.name);
// }

function printNestedObject(obj: any) {
  if (
    obj != undefined &&
    obj.nestedProperty != undefined &&
    obj.nestedProperty.name
  ) {
    console.log(`name = ${obj.nestedProperty.name}`);
  } else {
    console.log(`name not found or undefined`);
  }
}

printNestedObject(null);
printNestedObject(undefined);
printNestedObject({
  aProperty: "another property",
});
printNestedObject({
  nestedProperty: {
    name: "nestedProperty",
  },
});

// optional chaining using the syntax
function printNestedOptionalChain(obj: any) {
  if (obj?.nestedProperty?.name) {
    console.log(`name = ${obj.nestedProperty.name}`);
  } else {
    console.log(`name not found or undefined`);
  }
}

printNestedOptionalChain(undefined);
printNestedOptionalChain({ aProperty: "another property" });
printNestedOptionalChain({
  nestedProperty: "nested property",
});

// nullish coalescing
function nullishCheck(a: number | undefined | null) {
  console.log(`a: ${a ?? `null or undefined`}`);
}

nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

// null operands

function testNullOperands(a: number, b: number | null | undefined) {
  let addResult = a + (b ?? 0);
}

// definite assignment
let globalString!: string;
setGlobalString("this is a string");
console.log(`globalString = ${globalString}`);
function setGlobalString(value: string) {
  globalString = value;
}

// object
let structuredObject: object = {
  name: "myObject",
  properties: {
    id: 1,
    type: "AnObject",
  },
};

function printObjectType(a: object) {
  console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);

// never
function alwaysThrows(): never {
  throw new Error("this will always throw");
  // return -1; // unreachable code detected
}

// never in practice
enum AnEnum {
  FIRST,
  SECOND,
}

function getEnumValue(enumValue: AnEnum): string {
  switch (enumValue) {
    case AnEnum.FIRST:
      return "first case";
    case AnEnum.SECOND:
      return "second case";
  }
  let returnValue: never = enumValue;
  return returnValue;
}

console.log(getEnumValue(AnEnum.FIRST));

// object spread

let firstObj: object = { id: 1, name: "firstObject" };
let secondObj: object = { ...firstObj };

console.log(`secondObj : ${JSON.stringify(secondObj)}`);

let nameObj: object = { name: "nameobj name" };
let idObj: object = { id: 1 };

let obj3 = { ...nameObj, ...idObj };
console.log(`obj3 = ${JSON.stringify(obj3)}`);

// spread precedence

let objectPrec1: object = { id: 1, name: "obj1 name" };
let objectPrec2: object = { id: 1001, desc: "obj2 description" };

let objPrec3 = { ...objectPrec1, ...objectPrec2 };
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);

// spread with arrays
let firstArray: number[] = [1, 2, 4];
let secondArray: number[] = [3, 4, 5];
let thirdArray: Array<number> = [...firstArray, ...secondArray];
console.log(`third array = ${thirdArray}`);

let objectArray1: object[] = [{ id: 1, name: "first element" }];

let objectArray2: object[] = [{ id: 2, name: "second element" }];

let objectArray3: object[] = [
  ...objectArray1,
  { id: 3, name: "third element" },
  ...objectArray2,
];

console.log(`objArray3 = ${JSON.stringify(objectArray3, null, 4)}`);

// tuples
let tuple1: [string, boolean];
tuple1 = ["test", true];

// tuple1 = {"test"};

// tuple destructuring
console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[1] : ${tuple1[1]}`);
// console.log(`tuple1[2] : ${tuple1[2]}`)

let [tupleString, tupleBoolean] = tuple1;
console.log(`tupleString = ${tupleString}`);
console.log(`tupleString = ${tupleBoolean}`);

// optional tuple elements

let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];

console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);

// tuple and spread syntax
let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "str1", "str2", "str3"];

// object destructuring
let complexObject = {
  aNum: 1,
  bStr: "name",
  cBool: true,
};

let { aNum, bStr, cBool } = complexObject;
console.log(`aNum : ${aNum}`);
console.log(`aNum : ${bStr}`);
console.log(`aNum : ${cBool}`);

// rename but not type assertion
let { aNum: objId, bStr: objName, cBool: isValid } = complexObject;
console.log(`objId : ${objId}`);
console.log(`objId : ${objName}`);
console.log(`objId : ${isValid}`);
