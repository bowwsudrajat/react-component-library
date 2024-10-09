import MuiError from '@momo/internal-babel-macros/MuiError.macro';

export default function makeStyles() {
  throw new MuiError(
    'MUI: makeStyles is no longer exported from @momo/material/styles.\n' +
      'You have to import it from @momo/styles.\n' +
      'See https://mui.com/r/migration-v4/#mui-material-styles for more details.',
  );
}
