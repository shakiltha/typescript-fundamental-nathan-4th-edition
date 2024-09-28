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
