import deepmerge from '@momo/utils/deepmerge';
import createTheme from './createTheme';

export default function createMuiStrictModeTheme(options, ...args) {
  return createTheme(
    deepmerge(
      {
        unstable_strictMode: true,
      },
      options,
    ),
    ...args,
  );
}
