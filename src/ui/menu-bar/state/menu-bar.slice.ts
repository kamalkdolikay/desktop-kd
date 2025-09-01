import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface MenuBarState {
  height: number;
}

const initialState: MenuBarState = {
  height: 0,
};

const menuBarSlice = createSlice({
  name: 'menu-bar',
  initialState,
  reducers: {
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
  },
});

export const { setHeight } = menuBarSlice.actions;
export default menuBarSlice.reducer;
