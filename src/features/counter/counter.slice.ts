import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CounterState {
  count: number;
  isLoading: boolean;
}

const initialState: CounterState = {
  count: 0,
  isLoading: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

// Selectors
export const selectCount = (state: RootState) => state.counter.count;
export const selectIsLoading = (state: RootState) => state.counter.isLoading;

// Actions
export const { increment, decrement, incrementByAmount, setIsLoading } = counterSlice.actions;

export default counterSlice.reducer;

