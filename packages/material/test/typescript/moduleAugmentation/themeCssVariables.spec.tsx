// testing docs/src/pages/customization/theme-components/theme-components.md
import { styled, experimental_extendTheme as extendTheme } from '@momo/material/styles';
import type {} from '@momo/material/themeCssVarsAugmentation';

declare module '@momo/material/styles' {
  interface PaletteOptions {
    gradient: {
      default: string;
    };
  }

  interface Palette {
    gradient: {
      default: string;
    };
  }
}

const StyledComponent = styled('button')(({ theme }) => ({
  background: theme.vars.palette.gradient.default,
}));

const StyledComponent2 = styled('button')(({ theme }) => ({
  // @ts-expect-error `default2` is not defined
  background: theme.vars.palette.gradient.default2,
}));

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        gradient: {
          default: '',
        },
      },
    },
    dark: {
      palette: {
        gradient: {
          default: '',
        },
      },
    },
  },
});

theme.getCssVar('palette-gradient-default');
