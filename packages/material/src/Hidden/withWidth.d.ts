import { Breakpoint } from '@momo/system';
import { PropInjector } from '@momo/types';

export interface WithWidthOptions {
  withTheme?: boolean;
  noSSR?: boolean;
  initialWidth?: Breakpoint;
  resizeInterval?: number;
}

export interface WithWidth {
  width: Breakpoint;
}

export interface WithWidthProps extends Partial<WithWidth> {
  innerRef?: React.Ref<any>;
}

export function isWidthDown(
  breakpoint: Breakpoint,
  screenWidth: Breakpoint,
  inclusive?: boolean,
): boolean;

export function isWidthUp(
  breakpoint: Breakpoint,
  screenWidth: Breakpoint,
  inclusive?: boolean,
): boolean;

export default function withWidth(
  options?: WithWidthOptions,
): PropInjector<WithWidth, WithWidthProps>;
