import styled, { css } from 'styled-components';
import {
  grid,
  GridProps as StyledSystemGridProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
  compose,
  color,
  ColorProps,
} from 'styled-system';
import React from 'react';

type ContentAlignment =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

interface CustomGridProps {
  alignItems?: string;
  justifyItems?: string;
  alignContent?: ContentAlignment;
  justifyContent?: ContentAlignment;
}

type GridProps = StyledSystemGridProps &
  SpaceProps &
  BorderProps &
  LayoutProps &
  ColorProps &
  CustomGridProps;

const Grid = styled.div<GridProps>`
  display: grid;
  justify-items: ${({ justifyItems }) => justifyItems || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'center'};

  justify-content: center;

  align-content: ${({ alignContent }) => alignContent};

  grid-template-columns: ${({ children }) =>
    children && css`repeat(${React.Children.count(children)}, 1fr)`};

  ${compose(grid, space, border, layout, color)};
`;

export default Grid;
