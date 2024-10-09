import * as React from 'react';
import { AppBar } from '@momo/material';

declare module '@momo/material/AppBar' {
  interface AppBarPropsColorOverrides {
    customAppBarColor: true;
  }
}

<AppBar color="customAppBarColor" />;

// @ts-expect-error unknown color
<AppBar color="foo" />;
