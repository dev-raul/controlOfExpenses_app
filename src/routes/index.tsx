import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from '../store';
import {AuthActions} from '../store/modules/auth/reducer';

import {AuthRoutes} from './Auth.routes';

const Routes = () => {
  const dispatch = useDispatch();
  const {loading, signed} = useSelector((store: Store) => store.Auth);
  useEffect(() => {
    dispatch(AuthActions.checkToken());
  }, [dispatch]);

  if (loading) {
    return <View />;
  }

  return signed ? <View /> : <AuthRoutes />;
};

export default Routes;
