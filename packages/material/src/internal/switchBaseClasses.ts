import generateUtilityClasses from '@momo/utils/generateUtilityClasses';
import generateUtilityClass from '@momo/utils/generateUtilityClass';

export interface SwitchBaseClasses {
  root: string;
  checked: string;
  disabled: string;
  input: string;
  edgeStart: string;
  edgeEnd: string;
}

export type SwitchBaseClassKey = keyof SwitchBaseClasses;

export function getSwitchBaseUtilityClass(slot: string): string {
  return generateUtilityClass('PrivateSwitchBase', slot);
}

const switchBaseClasses: SwitchBaseClasses = generateUtilityClasses('PrivateSwitchBase', [
  'root',
  'checked',
  'disabled',
  'input',
  'edgeStart',
  'edgeEnd',
]);

export default switchBaseClasses;
