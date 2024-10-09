import * as React from 'react';
import { createRenderer } from '@momo-internal/test-utils';
import AlertTitle, { alertTitleClasses as classes } from '@momo/material/AlertTitle';
import Typography from '@momo/material/Typography';
import describeConformance from '../../test/describeConformance';

describe('<AlertTitle />', () => {
  const { render } = createRenderer();

  describeConformance(<AlertTitle />, () => ({
    classes,
    inheritComponent: Typography,
    render,
    muiName: 'MuiAlertTitle',
    refInstanceof: window.HTMLDivElement,
    testStateOverrides: { styleKey: 'root' },
    skip: ['componentsProp', 'themeVariants', 'themeDefaultProps'],
  }));
});
