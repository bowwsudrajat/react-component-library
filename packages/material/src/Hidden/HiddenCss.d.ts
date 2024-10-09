import * as React from 'react';
import { Breakpoint } from '@momo/system';

export interface HiddenCssProps {
  lgDown?: boolean;
  lgUp?: boolean;
  mdDown?: boolean;
  mdUp?: boolean;
  only?: Breakpoint | Breakpoint[];
  smDown?: boolean;
  smUp?: boolean;
  xlDown?: boolean;
  xlUp?: boolean;
  xsDown?: boolean;
  xsUp?: boolean;
}

declare const HiddenCss: React.JSXElementConstructor<HiddenCssProps>;

export default HiddenCss;
