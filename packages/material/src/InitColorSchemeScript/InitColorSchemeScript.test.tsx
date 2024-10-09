import * as React from 'react';
import { expect } from 'chai';
import { createRenderer } from '@momo-internal/test-utils';
import InitColorSchemeScript from '@momo/material/InitColorSchemeScript';

describe('InitColorSchemeScript', () => {
  const { render } = createRenderer();

  it('should render as expected', () => {
    const { container } = render(<InitColorSchemeScript />);
    expect(container.firstChild).to.have.tagName('script');
  });
});
