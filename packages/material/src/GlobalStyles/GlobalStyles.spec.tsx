import * as React from 'react';
import GlobalStyles from '@momo/material/GlobalStyles';

function TestThemeType() {
  <GlobalStyles
    styles={(theme) => ({
      [theme.breakpoints.up('sm')]: { color: theme.palette.primary.main },
    })}
  />;
}
