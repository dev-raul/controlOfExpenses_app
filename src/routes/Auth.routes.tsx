import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '@pages';
import {useTheme} from 'styled-components';
const Stack = createNativeStackNavigator();
export const AuthRoutes = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.background},
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};