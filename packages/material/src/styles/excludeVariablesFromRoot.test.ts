import { expect } from 'chai';
import excludeVariablesFromRoot from './excludeVariablesFromRoot';

describe('excludeVariablesFromRoot', () => {
  it('should return true', () => {
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-1`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-2`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-3`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-4`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-5`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-6`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-7`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-8`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-9`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-10`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-11`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-12`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-13`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-14`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-15`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-16`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-17`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-18`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-19`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-20`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-21`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-22`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-23`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-overlays-24`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-palette-AppBar-darkBg`)).to.equal(true);
    expect(excludeVariablesFromRoot('momo').includes(`--momo-palette-AppBar-darkColor`)).to.equal(
      true,
    );
  });

  it('should return true for custom prefix', () => {
    expect(excludeVariablesFromRoot('').includes(`--overlays-1`)).to.equal(true);
    expect(excludeVariablesFromRoot('').includes(`--palette-AppBar-darkBg`)).to.equal(true);
    expect(excludeVariablesFromRoot('').includes(`--palette-AppBar-darkColor`)).to.equal(true);
  });
});
