import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, ForgetPassword, Confirmation} from '@pages';
import {useTheme} from 'styled-components';
import {Header} from '@components';
import {UserCredentials} from '@pages/Auth/SignUp/UserCredentials';
import {UserContact} from '@pages/Auth/SignUp/UserContact';
import {UserProfile} from '@pages/Auth/SignUp/UserProfile';

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
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen
        options={{header: () => null}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      {/* SignUp */}
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="UserContact" component={UserContact} />
      <Stack.Screen name="UserCredentials" component={UserCredentials} />
      {/* end SignUp */}
    </Stack.Navigator>
  );
};
