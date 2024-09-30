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
