import * as React from 'react';
import { createRenderer } from '@momo-internal/test-utils';
import Stack, { stackClasses as classes } from '@momo/material/Stack';
import describeConformance from '../../test/describeConformance';

// The main tests are in momo-system Stack folder
describe('<Stack />', () => {
  const { render } = createRenderer();

  const defaultProps = {
    children: <div />,
  };

  describeConformance(<Stack {...defaultProps} />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    refInstanceof: window.HTMLDivElement,
    muiName: 'MuiStack',
    testVariantProps: { direction: 'row' },
    skip: ['componentsProp', 'classesRoot'],
  }));
});
