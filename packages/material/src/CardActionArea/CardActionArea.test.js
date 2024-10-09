import * as React from 'react';
import { createRenderer } from '@momo-internal/test-utils';
import CardActionArea, { cardActionAreaClasses as classes } from '@momo/material/CardActionArea';
import ButtonBase from '@momo/material/ButtonBase';
import describeConformance from '../../test/describeConformance';

describe('<CardActionArea />', () => {
  const { render } = createRenderer();

  describeConformance(<CardActionArea />, () => ({
    classes,
    inheritComponent: ButtonBase,
    render,
    muiName: 'MuiCardActionArea',
    testDeepOverrides: { slotName: 'focusHighlight', slotClassName: classes.focusHighlight },
    testVariantProps: { variant: 'foo' },
    refInstanceof: window.HTMLButtonElement,
    skip: ['componentProp', 'componentsProp'],
  }));
});
