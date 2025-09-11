import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DialogState {
  openDialogId: string | null; // which dialog is open
}

const initialState: DialogState = {
  openDialogId: null,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<string>) => {
      state.openDialogId = action.payload;
    },
    closeDialog: (state) => {
      state.openDialogId = null;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
