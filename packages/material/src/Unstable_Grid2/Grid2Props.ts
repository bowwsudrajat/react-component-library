import * as React from 'react';
import { OverrideProps } from '@momo/types';
import { SxProps, SystemProps } from '@momo/system';
import { GridBaseProps } from '@momo/system/Unstable_Grid';
import { Theme } from '../styles';

export type Grid2Slot = 'root';

export interface Grid2TypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & GridBaseProps & { sx?: SxProps<Theme> } & SystemProps<Theme>;
  defaultComponent: D;
}

export type Grid2Props<
  D extends React.ElementType = Grid2TypeMap['defaultComponent'],
  P = {
    component?: React.ElementType;
  },
> = OverrideProps<Grid2TypeMap<P, D>, D>;
