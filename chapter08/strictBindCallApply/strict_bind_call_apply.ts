class MyBoundClass {
  name: string = "defaultNameValue";

  printName(index: number, description: string) {
    console.log(`this.name: ${this.name}`);
    console.log(`index: ${index}`);
    console.log(`description: ${description}`);
  }
}

let testBoundClass = new MyBoundClass();
// testBoundClass.printName(1, "testDescriptor");

// testBoundClass.printName.call({ name: `overridden name property` }, 1, `wow !`);
testBoundClass.printName.apply({ name: `overridden name property` }, [
  1,
  `wow !`,
]);

let boundThis = {
  name: `boundThis`,
};

let boundPrintNameFunc = testBoundClass.printName.bind(
  boundThis,
  2,
  "test description2"
);
boundPrintNameFunc();
