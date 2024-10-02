// mapped types

interface IAbRequired {
  a: number;
  b: string;
}

let ab: IAbRequired = {
  a: 1,
  b: "test",
};

type WeakInterface<T> = {
  [K in keyof T]?: T[K];
};

let allOptional: WeakInterface<IAbRequired> = {};

type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
};

let readonlyVar: Readonly1<IAbRequired> = {
  a: 1,
  b: "test",
};

// readonlyVar.a = 2;

// Pick
interface IAbc {
  a: number;
  b: string;
  c: boolean;
}

type PickAb = Pick<IAbc, "a" | "b">;
let pickAbObject: PickAb = {
  a: 1,
  b: "test",
};

// Record

type RecordedCd = Record<"c" | "d", number>;
let recordedCdVar: RecordedCd = {
  c: 1,
  d: 1,
};

// conditional types
type NumberOrString<T> = T extends number ? number : string;

function logNumberOrString<T>(input: NumberOrString<T>) {
  console.log(`logNumberOrString : ${input}`);
}

logNumberOrString<number>(1);
logNumberOrString<string>("test");
// logNumberOrString<boolean>(true);
logNumberOrString<boolean>("boolean does not extend number");
