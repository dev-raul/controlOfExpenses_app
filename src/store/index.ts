import createSagaMiddleware from 'redux-saga';
import {StateType} from 'typesafe-actions';
import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootSaga, rootReducer} from './modules';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

export type Store = StateType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
