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
