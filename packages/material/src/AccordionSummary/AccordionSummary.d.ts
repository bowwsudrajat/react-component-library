import * as React from 'react';
import { SxProps } from '@momo/system';
import { ExtendButtonBase, ExtendButtonBaseTypeMap } from '../ButtonBase';
import { OverrideProps } from '../OverridableComponent';
import { Theme } from '..';
import { AccordionSummaryClasses } from './accordionSummaryClasses';

export interface AccordionSummaryOwnProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<AccordionSummaryClasses>;
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon?: React.ReactNode;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export type AccordionSummaryTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'div',
> = ExtendButtonBaseTypeMap<{
  props: AdditionalProps & AccordionSummaryOwnProps;
  defaultComponent: RootComponent;
}>;

declare const AccordionSummary: ExtendButtonBase<AccordionSummaryTypeMap>;

export type AccordionSummaryProps<
  RootComponent extends React.ElementType = AccordionSummaryTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<AccordionSummaryTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

export default AccordionSummary;
