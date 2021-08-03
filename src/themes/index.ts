import {dark} from './dark';
import {light} from './light';
export interface FontInterface {
  logoTitle: string;
  heading: string;
  text: string;
  complements: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      background: string;

      heading: string;
      body_dark: string;
      body_light: string;

      shape: string;
      white: string;
      gray: string;

      green: string;
      green_dark: string;
      green_light: string;

      blue: string;
      blue_dark: string;
      blue_light: string;

      red: string;
      red_dark: string;
      red_light: string;
    };
    fonts: FontInterface;
  }
}
export const themes = {light, dark};
