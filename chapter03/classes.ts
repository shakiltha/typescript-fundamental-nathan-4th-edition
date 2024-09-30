// classes

class SimpleClass {
  id: number | undefined;
  print(): void {
    console.log(`SimpleClass.id = ${this.id}`);
  }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();

// implementing interfaces

interface IPrint {
  print(): void;
}

class ClassA implements IPrint {
  print(): void {
    console.log(`ClassA.print() called.`);
  }
}

class ClassB implements IPrint {
  print(): void {
    console.log(`ClassB.print() called.`);
  }
}

class ClassC {
  print(): void {
    console.log(`ClassC.print() called`);
  }
}

function printClass(a: IPrint) {
  a.print();
}

let classA = new ClassA();
let classB = new ClassB();
let classC = new ClassC();

printClass(classA);
printClass(classB);
printClass(classC);

// class constructors
class ClassWithConstructor {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}

let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);

// class modifiers
class ClassWithPublicProperty {
  public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

let privateAccess = new ClassWithPrivateProperty(20);
// privateAccess.id = 30;

// ES6 private fields

// class ClassES6Private {
//   #id: number; // es6 private field. prefix props with # symbol
//   constructor(id: number) {
//     this.#id = id;
//   }
// }

// let es6PrivateClass = new ClassES6Private(10);
// es6PrivateClass.#id = 40;

// constructor parameter properties
class ClassWithCtorMods {
  constructor(public id: number, private name: string) {}
}

let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.id = ${myClassMod.name}`);

// readonly

class ClassWithReadonly {
  readonly name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  setNameValue(_name: string) {
    // this.name = _name;
  }
}

// getter and setter accessors

class ClassWithAccessors {
  private _id: number = 0;
  get id(): number {
    console.log(`get id property`);
    return this._id;
  }
  set id(value: number) {
    console.log(`set id property`);
    this._id = value;
  }
}

let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

// static functions
class StaticFunction {
  static printTwo() {
    console.log("2");
  }
}

StaticFunction.printTwo();

// static properties
class StaticProperty {
  static count = 0;
  updateCount() {
    StaticProperty.count++;
  }
}

let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();

firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);
