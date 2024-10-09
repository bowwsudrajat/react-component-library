import { Interpolation } from '@momo/system';
import { createTheme, styled } from '@momo/material/styles';

declare module '@momo/material/styles' {
  interface Mixins {
    customMixin: Interpolation<{}>;
  }
}

// ensure MixinsOptions work
const theme = createTheme({ mixins: { customMixin: { paddingLeft: 2 } } });

// ensure Mixins work
const Example = styled('div')(({ theme: t }) => t.mixins.customMixin);
