// declaration file typing

// function overrides

declare function trace(arg: string | number | boolean);
declare function trace(arg: { id: number; name: string });

trace("trace with string");
trace(true);
trace(1);
trace({ id: 1, name: "test" });
