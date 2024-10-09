import generateUtilityClasses from '@momo/utils/generateUtilityClasses';
import generateUtilityClass from '@momo/utils/generateUtilityClass';

export interface AccordionDetailsClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type AccordionDetailsClassKey = keyof AccordionDetailsClasses;

export function getAccordionDetailsUtilityClass(slot: string): string {
  return generateUtilityClass('MomoAccordionDetails', slot);
}

const accordionDetailsClasses: AccordionDetailsClasses = generateUtilityClasses(
  'MomoAccordionDetails',
  ['root'],
);

export default accordionDetailsClasses;
