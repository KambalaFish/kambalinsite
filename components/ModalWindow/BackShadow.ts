import styled from 'styled-components';
import Container from '../Container';
import { PointerEvents, Visibility } from './ModalWindow';

const TRANSITION_TIME = 800;

interface BackShadowProps extends Visibility {
  pointerEvents?: PointerEvents;
}

const showHideBackShadow = (isVisible: boolean) =>
  isVisible ? `visibility: visible; opacity: 1;` : `visibility: hidden; opacity: 0;`;

const BackShadow = styled(Container)<BackShadowProps>`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  background-color: rgba(18, 18, 18, 0.95);
  ${({ isVisible }) => showHideBackShadow(isVisible)};
  z-index: 9999;
  transition: visibility ${TRANSITION_TIME}ms, opacity ${TRANSITION_TIME}ms linear,
    background-color ${TRANSITION_TIME}ms linear;
  overflow-y: auto;
  overflow-x: hidden;

  pointer-events: ${({ pointerEvents }) => pointerEvents && pointerEvents.toString()};
`;

export { BackShadow, TRANSITION_TIME };
