import * as React from 'react';
import { expect } from 'chai';
import { createRenderer } from '@momo-internal/test-utils';
import { ThemeProvider } from '@momo/material/styles';

describe('ThemeProvider', () => {
  const { render } = createRenderer();

  it('When theme is a function, it should not show warning', () => {
    expect(() =>
      render(
        <ThemeProvider theme={{}}>
          <ThemeProvider theme={() => ({})} />
        </ThemeProvider>,
      ),
    ).not.toWarnDev();
  });
});
