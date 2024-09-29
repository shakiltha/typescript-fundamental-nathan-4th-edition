// optional parameters

function concatValues(a: string, b?: string) {
  console.log(`a + b = ${a + b}`);
}

concatValues("first", "second");
concatValues("third");

// default parameters

function concatWithDefault(a: string, b: string = "default") {
  console.log(`a + b = ${a + b}`);
}

concatWithDefault("first", "second");
concatWithDefault("third ");
