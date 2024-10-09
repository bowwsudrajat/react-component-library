import CloseRounded from '@momo/icons-material/CloseRounded';
import { createTheme } from '@momo/material';

createTheme({
  components: {
    MuiAlert: {
      defaultProps: {
        slots: {
          closeIcon: CloseRounded,
        },
      },
    },
  },
});
