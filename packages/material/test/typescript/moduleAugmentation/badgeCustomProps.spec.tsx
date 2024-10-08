import * as React from 'react';
import Badge from '@momo/material/Badge';
import { createTheme } from '@momo/material/styles';

// Update the Button's extendable props options
declare module '@momo/material/Badge' {
  interface BadgePropsVariantOverrides {
    action: true;
  }
  interface BadgePropsColorOverrides {
    success: true;
  }
}

// theme typings should work as expected
const theme = createTheme({
  components: {
    MuiBadge: {
      variants: [
        {
          props: { variant: 'action' },
          style: {
            border: `2px dashed grey`,
          },
        },
        {
          props: { color: 'success' },
          style: {
            backgroundColor: 'green',
          },
        },
      ],
    },
  },
});

<Badge variant="action" color="success" badgeContent={123} />;

// @ts-expect-error typo
<Badge variant="Action" />;

// @ts-expect-error typo
<Badge color="Success" />;
