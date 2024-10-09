import * as React from 'react';
import { createRenderer } from '@momo-internal/test-utils';
import Typography from '@momo/material/Typography';
import DialogContentText, {
  dialogContentTextClasses as classes,
} from '@momo/material/DialogContentText';
import describeConformance from '../../test/describeConformance';

describe('<DialogContentText />', () => {
  const { render } = createRenderer();

  describeConformance(<DialogContentText>foo</DialogContentText>, () => ({
    classes,
    inheritComponent: Typography,
    render,
    muiName: 'MuiDialogContentText',
    refInstanceof: window.HTMLParagraphElement,
    skip: ['componentsProp', 'themeVariants'],
  }));

  describe('prop: children', () => {
    it('should render children', () => {
      const children = <span data-testid="test-children" />;
      const { getByTestId } = render(<DialogContentText>{children}</DialogContentText>);

      getByTestId('test-children');
    });
  });
});
