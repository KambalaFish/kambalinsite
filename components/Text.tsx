import styled from 'styled-components';
import {
  compose,
  typography,
  TypographyProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  boxShadow,
  BoxShadowProps,
} from 'styled-system';
type TextProps = TypographyProps & SpaceProps & LayoutProps & ColorProps & BoxShadowProps;
const Text = styled.p<TextProps>`
  font-size: 1.125rem;
  margin: 0 0 0.75rem;
  text-align: center;
  color: ${({ theme }) => theme.text.color};
  white-space: pre-line;
  line-height: 1.6;
  letter-spacing: 0.03rem;
  ${compose(typography, space, layout, color, boxShadow)};
`;

export default Text;
