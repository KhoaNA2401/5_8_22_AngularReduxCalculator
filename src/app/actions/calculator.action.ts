import { createAction, props } from '@ngrx/store';
export const inputNumber = createAction(
  '[Calculator] Enter Number',
  props<{ number: string }>()
);
export const inputOperator = createAction(
  '[Calculator] Enter Operation',
  props<{operator:string}>()
);
export const calculate = createAction('[Calculator] Calculate');
