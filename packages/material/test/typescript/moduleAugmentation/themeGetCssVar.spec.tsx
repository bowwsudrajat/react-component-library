import { experimental_extendTheme as extendTheme } from '@momo/material/styles';
import type {} from '@momo/material/themeCssVarsAugmentation';

declare module '@momo/material/styles' {
  interface ThemeCssVarOverrides {
    'custom-color': true;
  }
}

const theme = extendTheme();

theme.getCssVar('custom-color');
