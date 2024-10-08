import * as React from 'react';
import { OverridableStringUnion } from '@momo/types';
import { SxProps, SystemProps } from '@momo/system';
import { Theme } from '../styles';
import { OverrideProps, OverridableComponent } from '../OverridableComponent';
import { Variant } from '../styles/createTypography';
import { TypographyClasses } from './typographyClasses';

export interface TypographyPropsVariantOverrides {}

export interface TypographyOwnProps extends SystemProps<Theme> {
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TypographyClasses>;
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom?: boolean;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap?: boolean;
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>;
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping?: Partial<
    Record<OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>, string>
  >;
}

export interface TypographyTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'span',
> {
  props: AdditionalProps & TypographyOwnProps;
  defaultComponent: RootComponent;
}

/**
 *
 * Demos:
 *
 * - [Breadcrumbs](https://mui.com/material-ui/react-breadcrumbs/)
 * - [Typography](https://mui.com/material-ui/react-typography/)
 *
 * API:
 *
 * - [Typography API](https://mui.com/material-ui/api/typography/)
 */
declare const Typography: OverridableComponent<TypographyTypeMap>;

export type TypographyProps<
  RootComponent extends React.ElementType = TypographyTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<TypographyTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

export default Typography;
