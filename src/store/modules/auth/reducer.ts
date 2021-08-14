import {
  createReducer,
  createActions,
  DefaultActionTypes,
  DefaultActionCreators,
} from 'reduxsauce';
import {AnyAction} from 'redux';

interface ITypes extends DefaultActionTypes {
  LOAD_TOKEN: 'LOAD_TOKEN';
}

interface ICreators extends DefaultActionCreators {
  loadAuth: () => AnyAction;
}

interface INITIAL_STATE_PROS {
  token: string;
  loading: boolean;
  signed: Boolean;
  error: boolean;
}

const INITIAL_STATE: INITIAL_STATE_PROS = {
  token: '',
  loading: true,
  signed: false,
  error: false,
};

export const {Types, Creators} = createActions<ITypes, ICreators>(
  {
    LOAD_TOKEN: [''],
  },
  {
    prefix: 'AUTH_',
  },
);

const loadToken = (state = INITIAL_STATE, action: AnyAction) => {
  return {
    ...state,
    name: action.name,
  };
};

export const AuthReducer = createReducer<INITIAL_STATE_PROS, AnyAction>(
  INITIAL_STATE,
  {
    [Types.LOAD_TOKEN]: loadToken,
  },
);
