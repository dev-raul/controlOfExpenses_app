import {NavigationContainer} from '@react-navigation/native';
import {themes} from '@themes';
import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import Routes from './src/routes';

export const App = () => {
  const deviceTheme = useColorScheme() || 'light';
  const [theme, setTheme] = useState<DefaultTheme>(themes.light);
  useEffect(() => {
    if (deviceTheme && themes[deviceTheme]) {
      setTheme(themes[deviceTheme]);
    }
  }, [deviceTheme]);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};
