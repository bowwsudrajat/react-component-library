import * as React from 'react';
import { createRenderer } from '@momo-internal/test-utils';
import { Badge, badgeClasses as classes } from '@momo/base/Badge';
import { describeConformanceUnstyled } from '../../test/describeConformanceUnstyled';

describe('<Badge />', () => {
  const { render } = createRenderer();

  describeConformanceUnstyled(
    <Badge>
      <div />
    </Badge>,
    () => ({
      classes,
      inheritComponent: 'span',
      render,
      refInstanceof: window.HTMLSpanElement,
      testComponentPropWith: 'div',
      slots: {
        root: {
          expectedClassName: classes.root,
        },
        badge: {
          expectedClassName: classes.badge,
        },
      },
      skip: ['componentProp'],
    }),
  );
});
