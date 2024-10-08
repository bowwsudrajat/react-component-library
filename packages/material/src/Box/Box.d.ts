import { BoxTypeMap } from '@momo/system';
import { OverridableComponent } from '@momo/types';
import { OverrideProps } from '../OverridableComponent';
import { Theme as MaterialTheme } from '../styles';

/**
 *
 * Demos:
 *
 * - [Box](https://mui.com/material-ui/react-box/)
 *
 * API:
 *
 * - [Box API](https://mui.com/material-ui/api/box/)
 */
declare const Box: OverridableComponent<BoxTypeMap<{}, 'div', MaterialTheme>>;

export type BoxProps<
  RootComponent extends React.ElementType = BoxTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<BoxTypeMap<AdditionalProps, RootComponent, MaterialTheme>, RootComponent>;

export default Box;
