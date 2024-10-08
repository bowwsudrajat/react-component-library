import * as React from 'react';
import { expect } from 'chai';
import { createRenderer, screen } from '@momo-internal/test-utils';
import Dialog from '@momo/material/Dialog';
import DialogTitle from '@momo/material/DialogTitle';

describe('<Dialog /> integration', () => {
  const { render } = createRenderer();

  it('is automatically labelled by its DialogTitle', () => {
    render(
      <Dialog open>
        <DialogTitle>Set backup account</DialogTitle>
      </Dialog>,
    );

    expect(screen.getByRole('dialog')).toHaveAccessibleName('Set backup account');
  });

  it('can be manually labelled', () => {
    render(
      <Dialog open aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">Set backup account</DialogTitle>
      </Dialog>,
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAccessibleName('Set backup account');
    expect(dialog).to.have.attr('aria-labelledby', 'dialog-title');
  });
});
