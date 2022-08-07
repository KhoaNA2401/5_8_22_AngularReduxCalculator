import { counterState } from './../states/counter.states';

import * as counterAction from '../actions/counter.action';
import { createReducer, on } from '@ngrx/store';

const initialState: counterState = {
  count: 0,
};
export const counterReducer = createReducer(
  initialState,
  on(counterAction.increment, (state) => ({
    count: state.count + 1,
  })),
  on(counterAction.decrement, (state) => ({
    count: state.count - 1,
  }))
);
