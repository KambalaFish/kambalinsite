import styled from 'styled-components';
import { CA_CLOSING_TIME } from './ContentArea';

const CB_TRANSITION_TIME = 600;
const CloseButton = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: var(--btn-size);
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.modalWindow.closeButton.backgroundColor};
  cursor: pointer;
  --cross-color: ${({ theme }) => theme.modalWindow.closeButton.crossColor};
  --box-shadow-color: ${({ theme }) => theme.modalWindow.closeButton.boxShadowColor};
  box-shadow: inset 0 0 ${({ theme }) => theme.modalWindow.closeButton.blurRadius} 0.125rem
    var(--box-shadow-color);
  transition: box-shadow ${CB_TRANSITION_TIME}ms ease-in, transform ${CA_CLOSING_TIME / 2}ms linear,
    background-color ${CB_TRANSITION_TIME}ms ease-in;

  :hover,
  :hover::before,
  :hover::after {
    --cross-color: ${({ theme }) => theme.modalWindow.closeButton.hover.crossColor};
  }

  :hover {
    --box-shadow-color: ${({ theme }) => theme.modalWindow.closeButton.hover.boxShadowColor};
    background-color: ${({ theme }) => theme.modalWindow.closeButton.hover.backgroundColor};
    transition: box-shadow ${CB_TRANSITION_TIME}ms ease-in-out,
      background-color ${CB_TRANSITION_TIME}ms ease-in-out;
  }

  :hover::before,
  :hover::after {
    transition: background-color ${CB_TRANSITION_TIME}ms ease-in-out;
  }

  :active {
    transform: scale(0.85);
    transition: transform ${CA_CLOSING_TIME / 2}ms cubic-bezier(0, 0.47, 0.18, 0.99);
  }

  ::before,
  ::after {
    --line-width: calc(var(--btn-size) * 0.65);
    --line-height: calc(var(--btn-size) * 0.1);
    content: '';
    display: block;
    position: absolute;
    width: var(--line-width);
    height: var(--line-height);
    top: calc(var(--btn-size) / 2 - var(--line-height) / 2);
    left: calc(var(--btn-size) / 2 - var(--line-width) / 2);
    background-color: var(--cross-color);
    border-radius: 30%;
    transition: background-color ${CB_TRANSITION_TIME}ms ease-in;
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(-45deg);
  }
`;

export { CloseButton };
