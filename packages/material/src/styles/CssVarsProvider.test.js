import * as React from 'react';
import { expect } from 'chai';
import { createRenderer, screen } from '@momo-internal/test-utils';
import Box from '@momo/material/Box';
import { Experimental_CssVarsProvider as CssVarsProvider, useTheme } from '@momo/material/styles';

describe('[Material UI] CssVarsProvider', () => {
  let originalMatchmedia;
  const { render } = createRenderer();
  const storage = {};

  beforeEach(() => {
    originalMatchmedia = window.matchMedia;
    // Create mocks of localStorage getItem and setItem functions
    Object.defineProperty(global, 'localStorage', {
      value: {
        getItem: (key) => storage[key],
        setItem: (key, value) => {
          storage[key] = value;
        },
      },
      configurable: true,
    });
    window.matchMedia = () => ({
      addListener: () => {},
      removeListener: () => {},
    });
  });

  afterEach(() => {
    window.matchMedia = originalMatchmedia;
  });

  describe('All CSS vars', () => {
    it('palette', () => {
      function Vars() {
        const theme = useTheme();
        return (
          <div>
            <div data-testid="palette-primary">{JSON.stringify(theme.vars.palette.primary)}</div>
            <div data-testid="palette-secondary">
              {JSON.stringify(theme.vars.palette.secondary)}
            </div>
            <div data-testid="palette-error">{JSON.stringify(theme.vars.palette.error)}</div>
            <div data-testid="palette-info">{JSON.stringify(theme.vars.palette.info)}</div>
            <div data-testid="palette-success">{JSON.stringify(theme.vars.palette.success)}</div>
            <div data-testid="palette-warning">{JSON.stringify(theme.vars.palette.warning)}</div>
            <div data-testid="palette-text">{JSON.stringify(theme.vars.palette.text)}</div>
            <div data-testid="palette-background">
              {JSON.stringify(theme.vars.palette.background)}
            </div>
            <div data-testid="palette-divider">{JSON.stringify(theme.vars.palette.divider)}</div>
            <div data-testid="palette-action">{JSON.stringify(theme.vars.palette.action)}</div>
            <div data-testid="palette-common">{JSON.stringify(theme.vars.palette.common)}</div>
          </div>
        );
      }

      render(
        <CssVarsProvider>
          <Vars />
        </CssVarsProvider>,
      );

      expect(screen.getByTestId('palette-primary').textContent).to.equal(
        JSON.stringify({
          main: 'var(--momo-palette-primary-main)',
          light: 'var(--momo-palette-primary-light)',
          dark: 'var(--momo-palette-primary-dark)',
          contrastText: 'var(--momo-palette-primary-contrastText)',
          mainChannel: 'var(--momo-palette-primary-mainChannel)',
          lightChannel: 'var(--momo-palette-primary-lightChannel)',
          darkChannel: 'var(--momo-palette-primary-darkChannel)',
          contrastTextChannel: 'var(--momo-palette-primary-contrastTextChannel)',
        }),
      );
      expect(screen.getByTestId('palette-secondary').textContent).to.equal(
        JSON.stringify({
          main: 'var(--momo-palette-secondary-main)',
          light: 'var(--momo-palette-secondary-light)',
          dark: 'var(--momo-palette-secondary-dark)',
          contrastText: 'var(--momo-palette-secondary-contrastText)',
          mainChannel: 'var(--momo-palette-secondary-mainChannel)',
          lightChannel: 'var(--momo-palette-secondary-lightChannel)',
          darkChannel: 'var(--momo-palette-secondary-darkChannel)',
          contrastTextChannel: 'var(--momo-palette-secondary-contrastTextChannel)',
        }),
      );
      expect(screen.getByTestId('palette-error').textContent).to.equal(
        JSON.stringify({
          main: 'var(--momo-palette-error-main)',
          light: 'var(--momo-palette-error-light)',
          dark: 'var(--momo-palette-error-dark)',
          contrastText: 'var(--momo-palette-error-contrastText)',
          mainChannel: 'var(--momo-palette-error-mainChannel)',
          lightChannel: 'var(--momo-palette-error-lightChannel)',
          darkChannel: 'var(--momo-palette-error-darkChannel)',
          contrastTextChannel: 'var(--momo-palette-error-contrastTextChannel)',
        }),
      );
      expect(screen.getByTestId('palette-warning').textContent).to.equal(
        JSON.stringify({
          main: 'var(--momo-palette-warning-main)',
          light: 'var(--momo-palette-warning-light)',
          dark: 'var(--momo-palette-warning-dark)',
          contrastText: 'var(--momo-palette-warning-contrastText)',
          mainChannel: 'var(--momo-palette-warning-mainChannel)',
          lightChannel: 'var(--momo-palette-warning-lightChannel)',
          darkChannel: 'var(--momo-palette-warning-darkChannel)',
          contrastTextChannel: 'var(--momo-palette-warning-contrastTextChannel)',
        }),
      );
      expect(screen.getByTestId('palette-info').textContent).to.equal(
        JSON.stringify({
          main: 'var(--momo-palette-info-main)',
          light: 'var(--momo-palette-info-light)',
          dark: 'var(--momo-palette-info-dark)',
          contrastText: 'var(--momo-palette-info-contrastText)',
          mainChannel: 'var(--momo-palette-info-mainChannel)',
          lightChannel: 'var(--momo-palette-info-lightChannel)',
          darkChannel: 'var(--momo-palette-info-darkChannel)',
          contrastTextChannel: 'var(--momo-palette-info-contrastTextChannel)',
        }),
      );
      expect(screen.getByTestId('palette-success').textContent).to.equal(
        JSON.stringify({
          main: 'var(--momo-palette-success-main)',
          light: 'var(--momo-palette-success-light)',
          dark: 'var(--momo-palette-success-dark)',
          contrastText: 'var(--momo-palette-success-contrastText)',
          mainChannel: 'var(--momo-palette-success-mainChannel)',
          lightChannel: 'var(--momo-palette-success-lightChannel)',
          darkChannel: 'var(--momo-palette-success-darkChannel)',
          contrastTextChannel: 'var(--momo-palette-success-contrastTextChannel)',
        }),
      );

      expect(screen.getByTestId('palette-text').textContent).to.equal(
        JSON.stringify({
          primary: 'var(--momo-palette-text-primary)',
          secondary: 'var(--momo-palette-text-secondary)',
          disabled: 'var(--momo-palette-text-disabled)',
          primaryChannel: 'var(--momo-palette-text-primaryChannel)',
          secondaryChannel: 'var(--momo-palette-text-secondaryChannel)',
          icon: 'var(--momo-palette-text-icon)',
        }),
      );
      expect(screen.getByTestId('palette-divider').textContent).to.equal(
        '"var(--momo-palette-divider)"',
      );
      expect(screen.getByTestId('palette-background').textContent).to.equal(
        JSON.stringify({
          paper: 'var(--momo-palette-background-paper)',
          default: 'var(--momo-palette-background-default)',
          defaultChannel: 'var(--momo-palette-background-defaultChannel)',
          paperChannel: 'var(--momo-palette-background-paperChannel)',
        }),
      );
      expect(screen.getByTestId('palette-action').textContent).to.equal(
        JSON.stringify({
          active: 'var(--momo-palette-action-active)',
          hover: 'var(--momo-palette-action-hover)',
          hoverOpacity: 'var(--momo-palette-action-hoverOpacity)',
          selected: 'var(--momo-palette-action-selected)',
          selectedOpacity: 'var(--momo-palette-action-selectedOpacity)',
          disabled: 'var(--momo-palette-action-disabled)',
          disabledBackground: 'var(--momo-palette-action-disabledBackground)',
          disabledOpacity: 'var(--momo-palette-action-disabledOpacity)',
          focus: 'var(--momo-palette-action-focus)',
          focusOpacity: 'var(--momo-palette-action-focusOpacity)',
          activatedOpacity: 'var(--momo-palette-action-activatedOpacity)',
          activeChannel: 'var(--momo-palette-action-activeChannel)',
          selectedChannel: 'var(--momo-palette-action-selectedChannel)',
        }),
      );
      expect(screen.getByTestId('palette-common').textContent).to.equal(
        JSON.stringify({
          black: 'var(--momo-palette-common-black)',
          white: 'var(--momo-palette-common-white)',
          background: 'var(--momo-palette-common-background)',
          onBackground: 'var(--momo-palette-common-onBackground)',
          backgroundChannel: 'var(--momo-palette-common-backgroundChannel)',
          onBackgroundChannel: 'var(--momo-palette-common-onBackgroundChannel)',
        }),
      );
    });

    it('opacity', () => {
      function Vars() {
        const theme = useTheme();
        return (
          <div>
            <div data-testid="opacity">{JSON.stringify(theme.vars.opacity)}</div>
          </div>
        );
      }

      render(
        <CssVarsProvider>
          <Vars />
        </CssVarsProvider>,
      );

      expect(screen.getByTestId('opacity').textContent).to.equal(
        JSON.stringify({
          inputPlaceholder: 'var(--momo-opacity-inputPlaceholder)',
          inputUnderline: 'var(--momo-opacity-inputUnderline)',
          switchTrackDisabled: 'var(--momo-opacity-switchTrackDisabled)',
          switchTrack: 'var(--momo-opacity-switchTrack)',
        }),
      );
    });

    it('shape', () => {
      function Vars() {
        const theme = useTheme();
        return (
          <div>
            <div data-testid="shape">{JSON.stringify(theme.vars.shape)}</div>
          </div>
        );
      }

      render(
        <CssVarsProvider>
          <Vars />
        </CssVarsProvider>,
      );

      expect(screen.getByTestId('shape').textContent).to.equal(
        JSON.stringify({
          borderRadius: 'var(--momo-shape-borderRadius)',
        }),
      );
    });
  });

  describe('Typography', () => {
    it('contain expected typography', function test() {
      function Text() {
        const theme = useTheme();
        return <div>{Object.keys(theme.typography).join(',')}</div>;
      }

      const { container } = render(
        <CssVarsProvider>
          <Text />
        </CssVarsProvider>,
      );

      expect(container.firstChild?.textContent).to.equal(
        'htmlFontSize,pxToRem,fontFamily,fontSize,fontWeightLight,fontWeightRegular,fontWeightMedium,fontWeightBold,h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2,button,caption,overline,inherit',
      );
    });
  });

  describe('Spacing', () => {
    it('provides spacing utility', function test() {
      function Text() {
        const theme = useTheme();
        return <div>{theme.spacing(2)}</div>;
      }

      const { container } = render(
        <CssVarsProvider>
          <Text />
        </CssVarsProvider>,
      );

      expect(container.firstChild?.textContent).to.equal('16px');
    });
  });

  describe('Breakpoints', () => {
    it('provides breakpoint utilities', function test() {
      function Text() {
        const theme = useTheme();
        return <div>{theme.breakpoints.up('sm')}</div>;
      }

      const { container } = render(
        <CssVarsProvider>
          <Text />
        </CssVarsProvider>,
      );

      expect(container.firstChild?.textContent).to.equal('@media (min-width:600px)');
    });
  });

  describe('Skipped vars', () => {
    it('should not contain `variants` in theme.vars', () => {
      function Consumer() {
        const theme = useTheme();
        // @ts-expect-error
        return <div>{theme.vars.variants ? 'variants' : ''}</div>;
      }

      const { container } = render(
        <CssVarsProvider>
          <Consumer />
        </CssVarsProvider>,
      );

      expect(container.firstChild?.textContent).not.to.equal('variants');
    });

    it('should not contain `typography` in theme.vars', () => {
      function Consumer() {
        const theme = useTheme();
        // @ts-expect-error
        return <div>{theme.vars.typography ? 'typography' : ''}</div>;
      }

      const { container } = render(
        <CssVarsProvider>
          <Consumer />
        </CssVarsProvider>,
      );

      expect(container.firstChild?.textContent).not.to.equal('typography');
    });

    it('should not contain `focus` in theme.vars', () => {
      function Consumer() {
        const theme = useTheme();
        // @ts-expect-error
        return <div>{theme.vars.focus ? 'focus' : ''}</div>;
      }

      const { container } = render(
        <CssVarsProvider>
          <Consumer />
        </CssVarsProvider>,
      );

      expect(container.firstChild?.textContent).not.to.equal('focus');
    });
  });

  it("should use numeric values in system's spacing", function test() {
    if (/jsdom/.test(window.navigator.userAgent) || !/WebKit/.test(window.navigator.userAgent)) {
      this.skip();
    }

    const { getByTestId } = render(
      <CssVarsProvider enableColorScheme enableSystem>
        <Box
          data-testid="box-1"
          sx={{
            borderRadius: '50%',
          }}
        />
        <Box
          data-testid="box-2"
          sx={{
            borderRadius: 4,
          }}
        />
      </CssVarsProvider>,
    );

    expect(getByTestId('box-1')).toHaveComputedStyle({
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
    });
    expect(getByTestId('box-2')).toHaveComputedStyle({
      borderTopLeftRadius: '16px',
      borderTopRightRadius: '16px',
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '16px',
    });
  });
});
