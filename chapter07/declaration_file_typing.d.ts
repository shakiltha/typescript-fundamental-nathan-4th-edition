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