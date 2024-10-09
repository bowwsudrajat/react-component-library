import * as React from 'react';
import TextField from '@momo/material/TextField';
import { createTheme } from '@momo/material/styles';

// Update the TextField's extendable props options
declare module '@momo/material/TextField' {
  interface TextFieldPropsColorOverrides {
    customPalette: true;
  }
  interface TextFieldPropsSizeOverrides {
    extraLarge: true;
  }
}
declare module '@momo/material/FormControl' {
  interface FormControlPropsColorOverrides {
    customPalette: true;
  }
  interface FormControlPropsSizeOverrides {
    extraLarge: true;
  }
}
declare module '@momo/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    extraLarge: true;
  }
}
declare module '@momo/material/styles' {
  interface Palette {
    customPalette: Palette['primary'];
  }
  interface PaletteOptions {
    customPalette: PaletteOptions['primary'];
  }
}

// theme typings should work as expected
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      variants: [
        {
          props: { size: 'extraLarge' },
          style: {
            padding: '30px 15px',
            fontSize: 40,
          },
        },
      ],
    },
  },
  palette: {
    customPalette: {
      main: 'blue',
    },
  },
});

<TextField color="customPalette" size="extraLarge">
  Custom Color TextField
</TextField>;
<TextField variant="filled" size="extraLarge">
  Custom Size TextField
</TextField>;
