// import { createStore } from 'redux';
import {
  configureStore,
  getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { items, filter, loading, error } from './contacts-reducer';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({ items, filter });
// const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: { items, filter, loading, error },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistore = persistStore(store);

export default store;
