import { DefaultTheme } from '@momo/system';

export interface ThemeProviderProps<Theme = DefaultTheme> {
  children?: React.ReactNode;
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 * API:
 *
 * - [ThemeProvider API](https://mui.com/material-ui/customization/theming/#themeprovider)
 */
export default function ThemeProvider<Theme = DefaultTheme>(
  props: ThemeProviderProps<Theme>,
): React.ReactElement<ThemeProviderProps<Theme>>;
