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
