import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import homeReducer from '@/features/home/state/home.slice';
import portfolioReducer from '@/features/portfolio/state/portfolio.slice';
import menuBarReducer from '@/ui/menu-bar/state/menu-bar.slice';
import dialogReducer from '@/store/slice/dialog.slice';
import projectReducer from '@/store/slice/project.slice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    home: homeReducer,
    portfolio: portfolioReducer,
    menubar: menuBarReducer,
    dialog: dialogReducer,
    project: projectReducer,
  },
});

// Define types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for use in components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
