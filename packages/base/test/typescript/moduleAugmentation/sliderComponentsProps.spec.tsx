import * as React from 'react';
import { Slider } from '@momo/base';

declare module '@momo/base' {
  interface SliderRootSlotPropsOverrides {
    variant?: 'one' | 'two';
  }
}

<Slider slotProps={{ root: { variant: 'one' } }} />;

// @ts-expect-error unknown color
<Slider slotProps={{ root: { variant: 'three' } }} />;
