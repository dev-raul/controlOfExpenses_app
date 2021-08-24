import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import {Header} from '@components';
import {Extracts} from '@pages';

const Stack = createNativeStackNavigator();

export const SignedRoutes = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Extracts"
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
      <Stack.Screen name="Extracts" component={Extracts} />
    </Stack.Navigator>
  );
};
