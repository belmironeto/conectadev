import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import _ from 'lodash';

import typograph from './typography';

// const theme = createMuiTheme({
//   palette,
//   typograph,
// });
const baseConfig = {
  typograph,
};

const themes = [
  {
    darkMode: false,
    palette: {
      type: 'light',
      primary: {
        main: colors.indigo.A700,
        dark: colors.indigo.A700,
        light: colors.indigo.A200,
      },
      secondary: {
        main: colors.orange.A700,
        dark: colors.orange.A700,
        light: colors.orange.A200,
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
  },
  {
    darkMode: true,
    palette: {
      type: 'dark',
      primary: {
        main: colors.indigo.A400,
        dark: colors.indigo.A700,
        light: colors.indigo.A200,
      },
      secondary: {
        main: colors.indigo.A700,
        dark: colors.indigo.A700,
        light: colors.indigo.A200,
      },
      background: {
        default: '#282C34',
        dark: '#1C2025',
        paper: '#282C34',
      },
      text: {
        primary: '#E6E5E8',
        secondary: '#ADB0BB',
      },
    },
  },
];
export default function createTheme(settings) {
  const themeConfig = themes.find(
    (theme) => theme.darkMode === settings.darkMode
  );
  const theme = createMuiTheme(_.merge({}, baseConfig, themeConfig));

  return theme;
}
