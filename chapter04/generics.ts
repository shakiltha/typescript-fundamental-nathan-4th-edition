function printGeneric<T>(value: T) {
  console.log(`typeof T is : ${typeof value}`);
  console.log(`value is : ${value}`);
}

printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => {});
printGeneric({ id: 1 });

printGeneric<string>("test"); // <string> is type casting notation
// printGeneric<string>(1);

// multiple generic types
function usingTwoTypes<A, B>(first: A, second: B) {}

usingTwoTypes<number, string>(1, "string");
usingTwoTypes(1, "string");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");

// constraining the type of T
class Concatenator<T extends Array<string> | Array<number>> {
  public concatenateArray(items: T): string {
    let returnString = "";
    for (let i = 0; i < items.length; i++) {
      returnString += i > 0 ? "," : "";
      returnString += items[i].toString();
    }
    return returnString;
  }
}

let concator = new Concatenator();

let concatResult = concator.concatenateArray(["first", "second", "result"]);
console.log(`concatResult = ${concatResult}`);

concatResult = concator.concatenateArray([1000, 2000, 3000]);
console.log(`concatResult = ${concatResult}`);

// concatResult = concator.concatenateArray([true, false, true]);

// using the type T

interface IPrintId {
  id: number;
  print(): void;
}

interface IPrintName {
  name: string;
  print(): void;
}

function useT<T extends IPrintId | IPrintName>(item: T): void {
  item.print();
  // item.id = 1;
  // item.name = "test";
}
