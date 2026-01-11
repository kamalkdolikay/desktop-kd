import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  openProjectId: string | null;
}

const initialState: ProjectState = {
  openProjectId: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    openProject: (state, action: PayloadAction<string>) => {
      state.openProjectId = action.payload;
    },
    closeProject: (state) => {
      state.openProjectId = null;
    },
  },
});

export const { openProject, closeProject } = projectSlice.actions;
export default projectSlice.reducer;
