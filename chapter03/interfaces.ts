// interfaces and optional properties

interface IIdName {
  id: number;
  name: string;
}

let idObject: IIdName = {
  id: 2,
  name: "this is a name",
};

interface IOptional {
  id: number;
  name?: string;
}

let optionalId: IOptional = {
  id: 1,
};

let optionalIdName: IOptional = {
  id: 2,
  name: "optional name",
};

// weak types
interface IWeakType {
  id?: number;
  name?: string;
}

let weakTypeNoOverlap: IWeakType = {
  // description: "a description",
  name: "name",
};
