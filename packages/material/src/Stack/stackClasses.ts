import generateUtilityClasses from '@momo/utils/generateUtilityClasses';
import { StackClasses } from '@momo/system';
import generateUtilityClass from '@momo/utils/generateUtilityClass';

export type { StackClassKey } from '@momo/system';
export type { StackClasses };

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('MuiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('MuiStack', ['root']);

export default stackClasses;
