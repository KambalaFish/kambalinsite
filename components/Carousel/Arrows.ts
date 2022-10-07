import styled from 'styled-components';
import { showHide } from '@styles/utils';

const Arrow = styled.button<{ isVisible: boolean }>`
  border: 0;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  display: block;
  background-color: transparent;
  color: transparent;
  border-top: 0.25rem solid white;
  border-left: 0.25rem solid white;
  ${({ isVisible }) => showHide(isVisible)};
`;

const LeftArrow = styled(Arrow)`
  z-index: 1;
  transform: translateX(35%) rotate(-45deg);
  position: relative;
`;

const RightArrow = styled(Arrow)`
  z-index: 1;
  transform: translateX(-35%) rotate(135deg);
`;

export { LeftArrow, RightArrow };
