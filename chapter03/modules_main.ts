// importing modules

import { Module1 } from "./modules/Module1";
let mod1 = new Module1();
mod1.print();

// module renaming

import { Module1 as MyMod1 } from "./modules/Module1";

let myRenameMod = new MyMod1();
myRenameMod.print();
