import * as React from 'react';
import Button from '@momo/material/Button';
import { createTheme } from '@momo/material/styles';

// Update the Button's extendable props options
declare module '@momo/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    contained: false;
  }
  interface ButtonPropsColorOverrides {
    success: true;
  }
  interface ButtonPropsSizeOverrides {
    extraLarge: true;
  }
}

// theme typings should work as expected
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            border: `2px dashed grey`,
          },
        },
        {
          props: { size: 'extraLarge' },
          style: {
            fontSize: 26,
          },
        },
      ],
    },
  },
});

<Button variant="dashed" color="success" size="extraLarge">
  Custom
</Button>;

// @ts-expect-error The contained variant was disabled
<Button variant="contained" color="primary">
  Invalid
</Button>;
