import generateUtilityClasses from '@momo/utils/generateUtilityClasses';
import generateUtilityClass from '@momo/utils/generateUtilityClass';

export interface DialogContentClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `dividers={true}`. */
  dividers: string;
}

export type DialogContentClassKey = keyof DialogContentClasses;

export function getDialogContentUtilityClass(slot: string): string {
  return generateUtilityClass('MuiDialogContent', slot);
}

const dialogContentClasses: DialogContentClasses = generateUtilityClasses('MuiDialogContent', [
  'root',
  'dividers',
]);

export default dialogContentClasses;
