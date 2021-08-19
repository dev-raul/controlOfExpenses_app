import Immutable, {ImmutableObject} from 'seamless-immutable';
import {
  createReducer,
  createActions,
  DefaultActionTypes,
  DefaultActionCreators,
} from 'reduxsauce';
import {AnyAction} from 'redux';

interface SetTokenAction extends AnyAction {
  token: string;
}

interface ITypes extends DefaultActionTypes {
  CHECK_TOKEN: 'CHECK_TOKEN';
  SET_TOKEN: 'SET_TOKEN';
}

interface ICreators extends DefaultActionCreators {
  setToken: (token: string) => SetTokenAction;
  checkToken: () => AnyAction;
}

interface INITIAL_STATE_STORE {
  token: string;
  loading: boolean;
  signed: boolean;
  error: boolean;
}

export const INITIAL_STATE: ImmutableObject<INITIAL_STATE_STORE> = Immutable({
  token: '',
  loading: true,
  signed: false,
  error: false,
});

export const {Types: AuthTypes, Creators: AuthActions} = createActions<
  ITypes,
  ICreators
>(
  {
    setToken: ['token'],
    checkToken: [''],
  },
  {
    prefix: 'AUTH_',
  },
);

const setToken = (
  state = INITIAL_STATE,
  action: SetTokenAction,
): ImmutableObject<INITIAL_STATE_STORE> =>
  state.merge({
    token: action.token,
    // signed: true,
    loading: false,
  });

export const AuthReducer = createReducer<
  ImmutableObject<INITIAL_STATE_STORE>,
  AnyAction
>(INITIAL_STATE, {
  [AuthTypes.SET_TOKEN]: setToken,
});
