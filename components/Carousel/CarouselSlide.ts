import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

const CarouselSlide = styled.li<LayoutProps>`
  margin: 0;
  padding: 0;
  display: block;
  position: relative;
  ${layout};
`;

export { CarouselSlide };
