import {
  describeConformance as baseDescribeConformance,
  ConformanceOptions,
} from '@momo-internal/test-utils';
import { ThemeProvider, createTheme } from '@momo/system';

export default function describeConformance(
  minimalElement: React.ReactElement,
  getOptions: () => ConformanceOptions,
) {
  function getOptionsWithDefaults() {
    return {
      ThemeProvider,
      createTheme,
      ...getOptions(),
    };
  }

  return baseDescribeConformance(minimalElement, getOptionsWithDefaults);
}
