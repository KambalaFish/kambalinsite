import styled from 'styled-components';
import Container from '../Container';
import { PointerEvents, Visibility } from './ModalWindow';
import { showHide as showHideBackShadow } from '@styles/utils';

const TRANSITION_TIME = 800;

interface BackShadowProps extends Visibility {
  pointerEvents?: PointerEvents;
}

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
  background-color: ${({ theme }) => theme.modalWindow.backShadow.backgroundColor};
  ${({ isVisible }) => showHideBackShadow(isVisible)};
  z-index: 9999;
  transition: visibility ${TRANSITION_TIME}ms, opacity ${TRANSITION_TIME}ms linear,
    background-color ${TRANSITION_TIME}ms linear;
  overflow-y: auto;
  overflow-x: hidden;

  pointer-events: ${({ pointerEvents }) => pointerEvents && pointerEvents.toString()};
`;

export { BackShadow, TRANSITION_TIME };
