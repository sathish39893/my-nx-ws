import { configureStore } from '@reduxjs/toolkit';
import dealReducer from '../pages/Home/dealSlice';

export const store = configureStore({
  reducer: {
    deal: dealReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
