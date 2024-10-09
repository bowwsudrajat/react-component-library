import * as React from 'react';
import Button from '@momo/material/Button';
import Tooltip from '@momo/material/Tooltip';
import { PaletteColor } from '@momo/material/styles';

declare module '@momo/material/styles' {
  interface Palette {
    custom: PaletteColor;
  }
}

// Tooltip slotProps should only allow valid theme palettes to be accessed

<Tooltip
  title="tooltip"
  slotProps={{
    tooltip: {
      sx: {
        color: (theme) => theme.palette.custom.main,
        // @ts-expect-error Property 'invalid' does not exist on 'Palette'
        backgroundColor: (theme) => theme.palette.invalid.main,
      },
    },
    arrow: {
      sx: {
        color: (theme) => theme.palette.custom.main,
        // @ts-expect-error Property 'invalid' does not exist on 'Palette'
        backgroundColor: (theme) => theme.palette.invalid.main,
      },
    },
  }}
>
  <Button>Hover Me!</Button>
</Tooltip>;
