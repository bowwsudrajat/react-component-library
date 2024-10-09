import { expect } from 'chai';
import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_ClassNameGenerator as ClassNameGenerator,
} from '@momo/utils';

describe('generateUtilityClass', () => {
  it('should generate the class correctly', () => {
    expect(generateUtilityClass('MomoTest', 'slot')).to.equal('MomoTest-slot');
  });

  it('should consider if slot should generate state class', () => {
    expect(generateUtilityClass('MomoTest', 'active')).to.equal('Momo-active');
    expect(generateUtilityClass('MomoTest', 'checked')).to.equal('Momo-checked');
    expect(generateUtilityClass('MomoTest', 'disabled')).to.equal('Momo-disabled');
    expect(generateUtilityClass('MomoTest', 'readOnly')).to.equal('Momo-readOnly');
    expect(generateUtilityClass('MomoTest', 'error')).to.equal('Momo-error');
    expect(generateUtilityClass('MomoTest', 'focused')).to.equal('Momo-focused');
    expect(generateUtilityClass('MomoTest', 'focusVisible')).to.equal('Momo-focusVisible');
    expect(generateUtilityClass('MomoTest', 'required')).to.equal('Momo-required');
    expect(generateUtilityClass('MomoTest', 'expanded')).to.equal('Momo-expanded');
    expect(generateUtilityClass('MomoTest', 'selected')).to.equal('Momo-selected');
  });

  describe('ClassNameGenerator', () => {
    afterEach(() => {
      ClassNameGenerator.reset();
    });

    it('able to set custom generator', () => {
      const generator = (name: string) => `foo-bar-${name}`;
      ClassNameGenerator.configure(generator);

      expect(generateUtilityClass('MomoTest', 'slot')).to.equal('foo-bar-MomoTest-slot');
    });

    it('does not affect state class', () => {
      const generator = (name: string) => `foo-bar-${name}`;
      ClassNameGenerator.configure(generator);

      expect(generateUtilityClass('MomoTest', 'active')).to.equal('Momo-active');
      expect(generateUtilityClass('MomoTest', 'checked')).to.equal('Momo-checked');
      expect(generateUtilityClass('MomoTest', 'disabled')).to.equal('Momo-disabled');
      expect(generateUtilityClass('MomoTest', 'readOnly')).to.equal('Momo-readOnly');
      expect(generateUtilityClass('MomoTest', 'error')).to.equal('Momo-error');
      expect(generateUtilityClass('MomoTest', 'focused')).to.equal('Momo-focused');
      expect(generateUtilityClass('MomoTest', 'focusVisible')).to.equal('Momo-focusVisible');
      expect(generateUtilityClass('MomoTest', 'required')).to.equal('Momo-required');
      expect(generateUtilityClass('MomoTest', 'expanded')).to.equal('Momo-expanded');
      expect(generateUtilityClass('MomoTest', 'selected')).to.equal('Momo-selected');
    });
  });

  it('custom state prefix', () => {
    expect(generateUtilityClass('JoyButton', 'focusVisible', 'Joy')).to.equal('Joy-focusVisible');
  });
});
