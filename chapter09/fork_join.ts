import { forkJoin, interval, map, Observable, take, toArray } from "rxjs";

const onePerSecond = interval(1000);

const threeNumbers: Observable<number[]> = onePerSecond.pipe(
  take(3),
  map((value: number) => {
    console.log(`>> threeNumbers emitting : ${value}`);
    return value;
  }),
  toArray()
);

const twoStrings: Observable<string[]> = onePerSecond.pipe(
  take(2),
  map((value: number) => {
    console.log(`>> twoStrings emitting : value_${value}`);
    return `value_${value}`;
  }),
  toArray()
);

forkJoin([threeNumbers, twoStrings]).subscribe(([threeNumbers, twoStrings]) => {
  console.log(`<< threeNumbersReturned : ${threeNumbers}`);
  console.log(`<< twoStringsReturned : ${twoStrings}`);
});
