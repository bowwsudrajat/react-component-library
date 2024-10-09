import * as React from 'react';
import { expectType } from '@momo/types';
import { Popover, PaperProps } from '@momo/material';

const paperProps: PaperProps<'span'> = {
  component: 'span',
  onClick: (event) => {
    expectType<React.MouseEvent<HTMLSpanElement, MouseEvent>, typeof event>(event);
  },
};
function Test() {
  return (
    <React.Fragment>
      <Popover open />;
      <Popover open PaperProps={paperProps} />
    </React.Fragment>
  );
}
