import styled from 'styled-components';
import {
  compose,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  color,
  ColorProps,
} from 'styled-system';

type TitleProps = FontSizeProps & ColorProps & FontWeightProps;

const Title = styled.h1<TitleProps>`
  margin: 1rem 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  ::selection {
    color: ${({ theme }) => theme.title.selection.color};
    background-color: ${({ theme }) => theme.title.selection.color};
  }

  ${compose(fontSize, color, fontWeight)}
`;
export default Title;
