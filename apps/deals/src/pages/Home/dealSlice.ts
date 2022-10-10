import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import dealsData from './data/dealsdata';
import { DealProps } from '@my-nx-ws/data';

const initialState: DealProps[] = dealsData;

export const dealSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    addDeal: (state: DealProps[], action: PayloadAction<DealProps>) => {
      state.push(action.payload);
    },
    updateDeal: (state: DealProps[], action: PayloadAction<DealProps>) => {
      const updatedDeal = action.payload;
      state.map((deal) =>
        deal.dealnumber === updatedDeal.dealnumber ? updateDeal : deal
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDeal, updateDeal } = dealSlice.actions;

export default dealSlice.reducer;
