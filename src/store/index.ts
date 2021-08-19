import createSagaMiddleware from 'redux-saga';
import {StateType} from 'typesafe-actions';
import {createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {rootSaga, rootReducer} from './modules';
import {PersistConfig} from 'redux-persist/es/types';

export type Store = StateType<typeof rootReducer>;

const persistConfig: PersistConfig<Store> = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['Auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
