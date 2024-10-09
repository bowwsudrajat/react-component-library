import * as React from 'react';
import { createRenderer } from '@momo-internal/test-utils';
import CardContent, { cardContentClasses as classes } from '@momo/material/CardContent';
import describeConformance from '../../test/describeConformance';

describe('<CardContent />', () => {
  const { render } = createRenderer();

  describeConformance(<CardContent />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    muiName: 'MuiCardContent',
    refInstanceof: window.HTMLDivElement,
    skip: ['componentsProp', 'themeVariants'],
    testComponentPropWith: 'span',
  }));
});
