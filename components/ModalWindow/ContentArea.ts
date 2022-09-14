import styled, { css, keyframes } from 'styled-components';
import Container from '../Container';
import { TRANSITION_TIME } from './BackShadow';
import { minDeviceMedia } from '@styles/theme';
import { Visibility } from './ModalWindow';

const CA_ANIM_APPEARANCE_DELAY_TIME = 650;
const CA_CLOSING_TIME = 600;

const onOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  75% {
    opacity: 0.25;
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const onCloseAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;

const ContentArea = styled(Container)<Visibility>`
  cursor: auto;
  background-color: ${({ theme }) => theme.modalWindow.contentArea.backgroundColor};
  box-shadow: 0 0 ${({ theme }) => theme.modalWindow.contentArea.boxShadow.outSet.blurRadius}
      ${({ theme }) => theme.modalWindow.contentArea.boxShadow.outSet.spreadRadius}
      ${({ theme }) => theme.modalWindow.contentArea.boxShadow.outSet.color},
    inset 0 0 ${({ theme }) => theme.modalWindow.contentArea.boxShadow.inset.blurRadius}
      ${({ theme }) => theme.modalWindow.contentArea.boxShadow.inset.spreadRadius}
      ${({ theme }) => theme.modalWindow.contentArea.boxShadow.inset.color};
  border-radius: 2.5rem;
  padding: calc(var(--btn-size) * 1.5);
  position: relative;
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${onOpenAnimation} ${TRANSITION_TIME}ms both cubic-bezier(0, .27, .83, .99) ${CA_ANIM_APPEARANCE_DELAY_TIME}ms
        `
      : css`
          ${onCloseAnimation} ${CA_CLOSING_TIME}ms both ease-in-out 0s
        `};
  --btn-size: 2rem;

  ${minDeviceMedia.mobile} {
    --btn-size: 2.5rem;
  }

  ${minDeviceMedia.tablet} {
    --btn-size: 3rem;
  }

  pointer-events: inherit;
`;

export { ContentArea, CA_ANIM_APPEARANCE_DELAY_TIME, CA_CLOSING_TIME };
