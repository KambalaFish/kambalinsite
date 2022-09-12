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
  background-color: rgb(185, 0, 0);
  cursor: pointer;
  --cross-color: rgb(168, 168, 168);
  box-shadow: inset 0 0 0.2rem 0.125rem var(--cross-color);
  transition: box-shadow ${CB_TRANSITION_TIME}ms ease-in, transform ${CA_CLOSING_TIME / 2}ms linear,
    background-color ${CB_TRANSITION_TIME}ms ease-in;

  :hover,
  :hover::before,
  :hover::after {
    --cross-color: rgb(255, 255, 255);
  }

  :hover {
    background-color: rgb(255, 0, 0);
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
