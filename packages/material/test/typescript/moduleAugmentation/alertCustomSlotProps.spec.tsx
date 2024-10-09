import * as React from 'react';
import Alert from '@momo/material/Alert';
import { IconButton, IconButtonProps, svgIconClasses } from '@momo/material';

declare module '@momo/material/Alert' {
  interface AlertCloseButtonSlotPropsOverrides {
    iconSize: 'small' | 'medium';
  }
}

type MyIconButtonProps = IconButtonProps<
  'button',
  {
    iconSize?: 'small' | 'medium';
  }
>;

const MyIconButton = ({ iconSize, ...rest }: MyIconButtonProps) => {
  return (
    <IconButton
      {...rest}
      sx={{
        // whatever customization based on iconSize
        [`.${svgIconClasses.root}`]: {
          fontSize: iconSize === 'small' ? '1rem' : '1.5rem',
        },
      }}
    />
  );
};

<Alert
  severity="success"
  slots={{
    closeButton: MyIconButton,
  }}
  slotProps={{
    closeButton: {
      iconSize: 'medium',
    },
  }}
>
  Here is a gentle confirmation that your action was successful.
</Alert>;
