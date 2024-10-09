import { expect } from 'chai';
import { unstable_generateUtilityClasses as generateUtilityClasses } from '@momo/utils';

describe('generateUtilityClasses', () => {
  it('should generate the classes correctly', () => {
    expect(generateUtilityClasses('MuiTest', ['slot1', 'slot2'])).to.deep.equal({
      slot1: 'MuiTest-slot1',
      slot2: 'MuiTest-slot2',
    });
  });

  it('should consider if slot should generate state class', () => {
    expect(
      generateUtilityClasses('MuiTest', [
        'slot',
        'active',
        'checked',
        'disabled',
        'error',
        'focused',
        'focusVisible',
        'required',
        'expanded',
        'selected',
      ]),
    ).to.deep.equal({
      slot: 'MomoTest-slot',
      active: 'Momo-active',
      checked: 'Momo-checked',
      disabled: 'Momo-disabled',
      error: 'Momo-error',
      focused: 'Momo-focused',
      focusVisible: 'Momo-focusVisible',
      required: 'Momo-required',
      expanded: 'Momo-expanded',
      selected: 'Momo-selected',
    });
  });
});
