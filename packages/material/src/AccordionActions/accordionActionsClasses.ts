import generateUtilityClasses from '@momo/utils/generateUtilityClasses';
import generateUtilityClass from '@momo/utils/generateUtilityClass';

export interface AccordionActionsClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element unless `disableSpacing={true}`. */
  spacing: string;
}

export type AccordionActionsClassKey = keyof AccordionActionsClasses;

export function getAccordionActionsUtilityClass(slot: string): string {
  return generateUtilityClass('MomoAccordionActions', slot);
}

const accordionActionsClasses: AccordionActionsClasses = generateUtilityClasses(
  'MomoAccordionActions',
  ['root', 'spacing'],
);

export default accordionActionsClasses;
