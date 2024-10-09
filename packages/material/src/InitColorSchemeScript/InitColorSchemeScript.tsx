import * as React from 'react';
import SystemInitColorSchemeScript from '@momo/system/InitColorSchemeScript';

export const defaultConfig = {
  attribute: 'data-momo-color-scheme',
  colorSchemeStorageKey: 'momo-color-scheme',
  defaultLightColorScheme: 'light',
  defaultDarkColorScheme: 'dark',
  modeStorageKey: 'momo-mode',
} as const;

export default (function InitColorSchemeScript(props) {
  return <SystemInitColorSchemeScript {...defaultConfig} {...props} />;
} as typeof SystemInitColorSchemeScript);
