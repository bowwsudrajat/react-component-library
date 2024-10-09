import * as React from 'react';
import Dialog from '@momo/material/Dialog';
import DialogTitle from '@momo/material/DialogTitle';
import DialogContent from '@momo/material/DialogContent';
import DialogContentText from '@momo/material/DialogContentText';

function TestStandardPropsCallbackRefUsage() {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const setContentRef = React.useCallback((node: HTMLDivElement | null) => {
    contentRef.current = node;
    // ...
  }, []);

  return (
    <Dialog open>
      <DialogTitle>Dialog Demo</DialogTitle>
      <DialogContent ref={setContentRef}>
        <DialogContentText>Dialog content</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function TestStandardPropsObjectRefUsage() {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <Dialog open>
      <DialogTitle>Dialog Demo</DialogTitle>
      <DialogContent ref={contentRef}>
        <DialogContentText>Dialog content</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
