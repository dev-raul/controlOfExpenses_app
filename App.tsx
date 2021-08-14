import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {themes} from '@themes';
import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import Routes from './src/routes';
import {persistor, store} from './src/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

export const App = () => {
  const deviceTheme = useColorScheme() || 'light';
  const [theme, setTheme] = useState<DefaultTheme>(themes.light);
  useEffect(() => {
    if (deviceTheme && themes[deviceTheme]) {
      setTheme(themes[deviceTheme]);
    }
  }, [deviceTheme]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <StatusBar
              barStyle={
                deviceTheme === 'dark' ? 'light-content' : 'dark-content'
              }
              backgroundColor={theme.colors.background}
            />
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
