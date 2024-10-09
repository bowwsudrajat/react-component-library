'use client';
import PropTypes from 'prop-types';
import { createGrid as createGrid2 } from '@momo/system/Unstable_Grid';
import { OverridableComponent } from '@momo/types';
import { styled } from '../styles';
import { useDefaultProps } from '../DefaultPropsProvider';
import { Grid2TypeMap } from './Grid2Props';

const Grid2 = createGrid2({
  createStyledComponent: styled('div', {
    name: 'MuiGrid2',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root,
  }),
  componentName: 'MuiGrid2',
  useThemeProps: (inProps) => useDefaultProps({ props: inProps, name: 'MuiGrid2' }),
}) as OverridableComponent<Grid2TypeMap>;

Grid2.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export default Grid2;
