import * as React from 'react';
import InputLabel from '@momo/material/InputLabel';

declare module '@momo/material/InputLabel' {
  interface InputLabelPropsSizeOverrides {
    customSize: true;
  }
}

<InputLabel size="customSize" />;

// @ts-expect-error unknown size
<InputLabel size="foo" />;
