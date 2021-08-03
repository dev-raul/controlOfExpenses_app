import {fontsNames} from '@utils';
import {DefaultTheme} from 'styled-components';

export const light: DefaultTheme = {
  colors: {
    primary: '#9792E3',
    secundary: '#7F7CAF',
    background: '#EDFFEC',

    heading: '#48435C',
    body_dark: '#738078',
    body_light: '#AAB2AD',

    shape: '#F0F0F0',
    white: '#FFFFFF',
    gray: '#CFCFCF',

    blue: '#3D7199',
    blue_dark: '#005ba1',
    blue_light: '#EBF6FF',

    green: '#61E786',
    green_dark: '#32B768',
    green_light: '#DAF2E4',

    red: '#E83F5B',
    red_dark: '#ba0b28',
    red_light: '#e87b8d',
  },
  fonts: fontsNames,
};
