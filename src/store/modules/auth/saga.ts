import {all, delay, put, takeLatest} from '@redux-saga/core/effects';
import {AuthActions, AuthTypes} from './reducer';

function* checkTokenMiddleware() {
  yield delay(3000);
  yield put(AuthActions.setToken('token'));
}

export function* AuthSaga() {
  yield all([takeLatest(AuthTypes.CHECK_TOKEN, checkTokenMiddleware)]);
}
