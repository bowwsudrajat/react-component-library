import * as React from 'react';
import { expect } from 'chai';
import { createRenderer } from '@momo-internal/test-utils';
import { GlobalStyles } from '@momo/system';

describe('<GlobalStyles />', () => {
  const { render } = createRenderer();

  it('should work', () => {
    expect(() => render(<GlobalStyles styles={{}} />)).not.to.throw();
  });
});
