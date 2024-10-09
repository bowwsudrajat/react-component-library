import * as React from 'react';
import FormHelperText from '@momo/material/FormHelperText';
import FormControl from '@momo/material/FormControl';
import { createTheme } from '@momo/material/styles';

declare module '@momo/material/FormHelperText' {
  interface FormHelperTextPropsVariantOverrides {
    warning: true;
  }
}

// theme typings should work as expected
const theme = createTheme({
  components: {
    MuiFormHelperText: {
      variants: [
        {
          props: { variant: 'warning' },
          style: {
            backgroundColor: '#ffa726',
            color: '#ffffff',
          },
        },
      ],
    },
  },
});

<FormControl>
  <FormHelperText variant="warning">This is warning helper text</FormHelperText>
</FormControl>;

<FormControl>
  {/* @ts-expect-error unknown variant */}
  <FormHelperText variant="checked">This is example helper text</FormHelperText>
</FormControl>;
