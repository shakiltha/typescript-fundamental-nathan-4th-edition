import { of, Observable, from } from "rxjs";

// of
const emitter: Observable<number> = of(1, 2, 3, 4);

emitter.subscribe((value: number) => {
  console.log(`value: ${value}`);
});

// from

const emitArray: Observable<number> = from([1, 2, 3, 4]);

emitArray.subscribe((value: number) => {
  console.log(`arr: ${value}`);
});
