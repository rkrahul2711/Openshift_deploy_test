/**
 * @fileoverview This file sets up the Redux store with persistence using redux-persist.
 * It configures the store with a root reducer and custom middleware options.
 * The persisted state is stored in local storage.
 * @author Sushma
 */
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "../reducer/reducer"

const persistConfig = {
  key: `GBR - ${process.env.REACT_APP_ENV}`,
  storage,
  version: 1
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }),
  ],
})

export const persistor = persistStore(store)
