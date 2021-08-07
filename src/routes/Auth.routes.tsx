import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, ForgetPassword, Confirmation} from '@pages';
import {useTheme} from 'styled-components';
import {HeaderTitleLogo} from '@components';
const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.background},
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.heading,
        },
        headerTintColor: colors.heading,
        headerTitle: () => <HeaderTitleLogo />,
      }}>
      <Stack.Screen
        options={{header: () => null}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
};
