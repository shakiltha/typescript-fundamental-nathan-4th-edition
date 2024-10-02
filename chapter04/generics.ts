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
