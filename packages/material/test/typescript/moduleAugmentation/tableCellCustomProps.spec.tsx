import * as React from 'react';
import Table from '@momo/material/Table';
import TableCell from '@momo/material/TableCell';
import { createTheme } from '@momo/material/styles';

declare module '@momo/material/Table' {
  interface TablePropsSizeOverrides {
    large: true;
  }
}

declare module '@momo/material/TableCell' {
  interface TableCellPropsSizeOverrides {
    large: true;
  }
  interface TableCellPropsVariantOverrides {
    tableBody: true;
  }
}

// theme typings should work as expected
const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === 'large' && {
            paddingBlock: '1rem',
          }),
        }),
      },
      variants: [
        {
          props: { variant: 'tableBody' },
          style: {
            fontSize: '1.2em',
            color: '#C1D3FF',
          },
        },
      ],
    },
  },
});

<Table size="large">
  <TableCell size="large" />
</Table>;

<Table size="large">
  <TableCell variant="tableBody">Foo</TableCell>;
</Table>;

<Table size="large">
  {/* @ts-expect-error unknown variant */}
  <TableCell variant="tableHeading">Bar</TableCell>;
</Table>;
