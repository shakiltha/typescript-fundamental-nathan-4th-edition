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
