import * as React from 'react';
import { Select } from '@momo/base';

declare module '@momo/base' {
  interface SelectRootSlotPropsOverrides {
    variant?: 'one' | 'two';
  }
}

<Select slotProps={{ root: { variant: 'one' } }} />;

// @ts-expect-error unknown variant
<Select slotProps={{ root: { variant: 'three' } }} />;
