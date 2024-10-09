import generateUtilityClasses from '@momo/utils/generateUtilityClasses';
import generateUtilityClass from '@momo/utils/generateUtilityClass';
import { FormGroupClasses } from '../FormGroup';

export type RadioGroupClassKey = keyof FormGroupClasses;

export type RadioGroupClasses = FormGroupClasses;

export function getRadioGroupUtilityClass(slot: string): string {
  return generateUtilityClass('MuiRadioGroup', slot);
}

const radioGroupClasses: RadioGroupClasses = generateUtilityClasses('MuiRadioGroup', [
  'root',
  'row',
  'error',
]);

export default radioGroupClasses;
