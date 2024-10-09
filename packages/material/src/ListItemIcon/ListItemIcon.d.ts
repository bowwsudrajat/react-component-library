import * as React from 'react';
import { SxProps } from '@momo/system';
import { InternalStandardProps as StandardProps, Theme } from '..';
import { ListItemIconClasses } from './listItemIconClasses';

export interface ListItemIconProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>> {
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@momo/icons-material` SVG icon element.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ListItemIconClasses>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 *
 * Demos:
 *
 * - [Lists](https://mui.com/material-ui/react-list/)
 *
 * API:
 *
 * - [ListItemIcon API](https://mui.com/material-ui/api/list-item-icon/)
 */
export default function ListItemIcon(props: ListItemIconProps): JSX.Element;
