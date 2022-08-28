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
} from 'styled-system';

type ContainerProps = FlexboxProps & SpaceProps & BorderProps & LayoutProps & PositionProps;

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  ${compose(flexbox, space, border, layout, position)};
`;

export default Container;
