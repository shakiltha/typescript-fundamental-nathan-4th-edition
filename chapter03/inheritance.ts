// interface inheritance

interface IBase {
  id: number;
}

interface IDerivedFromBase extends IBase {
  name: string;
}

class IdNameClass implements IDerivedFromBase {
  id: number = 0;
  name: string = "nameString";
}

interface IBaseStringOrNumber {
  id: string | number;
}

// narrowing id type in derived interface (id type to only number)
interface IDerivedFromBaseNumber extends IBaseStringOrNumber {
  id: number;
}

// multiple inheritance
interface IMultiple extends IDerivedFromBase, IDerivedFromBaseNumber {
  description: string;
}

let multipleObject: IMultiple = {
  id: 1,
  name: "shakil",
  description: "software developer",
};

// class inheritance
class BaseClass implements IBase {
  id: number = 0;
}

// javascript don't support multiple inheritance in classes
class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
  name: string = "nameString";
}

// but a class can implement multiple interfaces
interface IFirstInterface {
  id: number;
}

interface ISecondInterface {
  name: string;
}

class MultipleInterfaces implements IFirstInterface, ISecondInterface {
  id: number = 0;
  name: string = "name string";
}

// the super keyword

class BaseClassWithCtor {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

class DerivedFromBaseClassWithCtor extends BaseClassWithCtor {
  private name: string;
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}

let derivedClassInstance = new DerivedFromBaseClassWithCtor(1, "test");
