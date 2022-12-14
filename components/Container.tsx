import styled from 'styled-components';
import {
  compose,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  boxShadow,
  BoxShadowProps,
  gridArea,
  GridAreaProps,
} from 'styled-system';

type ContainerPropsStyledSystem = FlexboxProps &
  SpaceProps &
  BorderProps &
  LayoutProps &
  PositionProps &
  BoxShadowProps &
  GridAreaProps;

type CustomContainerProps = {
  rowGap?: string;
  columnGap?: string;
};

type ContainerProps = ContainerPropsStyledSystem & CustomContainerProps;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
  ${compose(flexbox, space, border, layout, position, boxShadow, gridArea)};
`;

export default Container;
