// declaration file typing

// function overrides

declare function trace(arg: string | number | boolean);
declare function trace(arg: { id: number; name: string });

trace("trace with string");
trace(true);
trace(1);
trace({ id: 1, name: "test" });

// nested namespaces

declare module FirstNamespace {
  module SecondNamespace {
    module ThirdNamespace {
      function log(msg: string);
    }
  }
}

FirstNamespace.SecondNamespace.ThirdNamespace.log("test");

// classes

declare class MyModuleClass {
  public print(): void;
}

let myClass = new MyModuleClass();
myClass.print();

// static classes properties

declare class MyModuleStatic {
  static print(): void;
  static id: number;
}

MyModuleStatic.print();
MyModuleStatic.id;

// abstract classes
declare abstract class MyModuleAbstract {
  abstract print(): void;
}

class DerivedFromAbstract extends MyModuleAbstract {
  print() {}
}

// generics
declare function sort<T extends number | string>(input: Array<T>): Array<T> {};

let sortedStringArray: Array<string> = sort(["first", "second"]);
let sortedStringArray: Array<number> = sort([1, 2, 3, 4, 5]);

// distributed conditional types
declare type stringOrNumberOrBoolean<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : never;

type myNever = stringOrNumberOrBoolean<[string, number]>;

// conditional type inference

declare type inferFromPropertyType<T> = T extends { id: infer U } ? U : never;

type myString = inferFromPropertyType<{ id: string }>;
type myNumber = inferFromPropertyType<{ id: number }>;
