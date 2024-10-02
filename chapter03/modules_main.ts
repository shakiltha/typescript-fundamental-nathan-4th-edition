// importing modules

import { Module1 } from "./modules/Module1";
import { MultipleClass1, MultipleClass2 } from "./modules/MultipleExports";
import defaultAdd, { ModuleNonDefaultExport } from "./modules/DefaultExports";

let mod1 = new Module1();
mod1.print();

// module renaming

import { Module1 as MyMod1 } from "./modules/Module1";

let myRenameMod = new MyMod1();
myRenameMod.print();

let mc1 = new MultipleClass1();
let mc2 = new MultipleClass2();

let modDefault = defaultAdd(1, 2);
console.log(modDefault);

let modNonDefault = new ModuleNonDefaultExport();
