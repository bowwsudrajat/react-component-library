import * as React from 'react';
import { CircularProgress, LinearProgress } from '@momo/material';

declare module '@momo/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    customCircularColor: true;
  }
}
declare module '@momo/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    customLinearColor: true;
  }
}

<CircularProgress color="customCircularColor" />;

// @ts-expect-error unknown color
<CircularProgress color="foo" />;

<LinearProgress color="customLinearColor" />;

// @ts-expect-error unknown color
<LinearProgress color="foo" />;
