import * as React from 'react';
import { createRenderer } from '@momo-internal/test-utils';
import TableContainer, { tableContainerClasses as classes } from '@momo/material/TableContainer';
import describeConformance from '../../test/describeConformance';

describe('<TableContainer />', () => {
  const { render } = createRenderer();

  describeConformance(<TableContainer />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    muiName: 'MuiTableContainer',
    testVariantProps: { variant: 'foo' },
    refInstanceof: window.HTMLDivElement,
    testComponentPropWith: 'span',
    skip: ['componentsProp'],
  }));
});
