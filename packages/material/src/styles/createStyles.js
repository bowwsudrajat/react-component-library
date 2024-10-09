let warnedOnce = false;

// To remove in v6
export default function createStyles(styles) {
  if (!warnedOnce) {
    console.warn(
      [
        'MUI: createStyles from @momo/material/styles is deprecated.',
        'Please use @momo/styles/createStyles',
      ].join('\n'),
    );

    warnedOnce = true;
  }
  return styles;
}
