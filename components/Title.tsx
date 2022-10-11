import styled from 'styled-components';
import {
  compose,
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  space,
  SpaceProps,
} from 'styled-system';

type TitleProps = TypographyProps & ColorProps & LayoutProps & SpaceProps;

const Title = styled.h1<TitleProps>`
  margin: 1rem 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  ::selection {
    color: ${({ theme }) => theme.title.selection.color};
    background-color: ${({ theme }) => theme.title.selection.color};
  }

  ${compose(typography, color, layout, space)}
`;
export default Title;
