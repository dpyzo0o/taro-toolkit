import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { delay } from '~/utils/common';
import { AppThunk } from '../store';

const countSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      return state + action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;

export const asyncIncrement = (val: number): AppThunk => async dispatch => {
  await delay(1);
  dispatch(increment(val));
};

export const asyncDecrement = (val: number): AppThunk => async dispatch => {
  await delay(1);
  dispatch(decrement(val));
};
