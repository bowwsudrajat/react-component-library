import { createTheme } from '@momo/material';

createTheme({
  components: {
    MuiSwipeableDrawer: {
      defaultProps: {
        disableSwipeToOpen: true,
      },
    },
  },
});
