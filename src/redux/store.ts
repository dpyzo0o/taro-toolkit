import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [...getDefaultMiddleware()];

if (process.env.NODE_ENV === 'development') {
  middleware.push(require('redux-logger').createLogger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<T = void> = ThunkAction<Promise<T>, RootState, unknown, Action<string>>;

export default store;
