console.log(`catch_error.ts`);

import { of, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

interface IValue {
  value: number;
}
interface INestedObj {
  id?: IValue;
}
const objEmit: Observable<INestedObj> = of(
  { id: { value: 1 } },
  {},
  { id: { value: 2 } }
);

const returnIdValue = objEmit.pipe(
  map((value: INestedObj) => {
    return value.id!.value;
  }),
  catchError((error: unknown) => {
    console.log(`stream caught : ${error}`);
    return of(null);
  })
);

returnIdValue.subscribe({
  // called for each observable value
  next: (value: number | null) => {
    console.log(`received ${value} `);
    // will not go to values after error
  },
  // called if an error occurs
  error: (error: unknown) => {
    console.log(`error : ${error}`);
  },
  // complete function
  complete: () => {
    console.log(`complete`);
  },
});
