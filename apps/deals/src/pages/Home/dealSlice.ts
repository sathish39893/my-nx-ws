import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import dealsData from './dealsdata';

export interface DealState {
  dealnumber?: string;
  customername?: string;
  suppliername?: string;
  status?: string;
  datereceived?: string;
  amountfinanced?: number | null;
  owner?: string[];
  comments?: string;
}

const initialState: DealState[] = dealsData;

export const dealSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    addDeal: (state: DealState[], action: PayloadAction<DealState>) => {
      state.push(action.payload);
    },
    updateDeal: (state: DealState[], action: PayloadAction<DealState>) => {
      const deals = action.payload;
      const updatedDeal = [...state, deals];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDeal, updateDeal } = dealSlice.actions;

export default dealSlice.reducer;
