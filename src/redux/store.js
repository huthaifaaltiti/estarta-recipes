// applyMiddleware & compose for "redux-chrome-devtool" extension
import { createStore, applyMiddleware, compose } from "redux";
// redux-thunk
import thunk from "redux-thunk";
// allReducers
import AllReducers from "./AllReducers";

// redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// redux-persist
const persistedReducer = persistReducer(persistConfig, AllReducers);

// "redux-chrome-devtool" extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  // AllReducers after persisting store
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
