import usePrivateTheme from '@momo/private-theming/useTheme';

export default function useTheme() {
  const privateTheme = usePrivateTheme();
  return privateTheme?.$$material ?? privateTheme;
}
