import { css } from 'styled-components';

const showHide = (isVisible: boolean): string =>
  isVisible ? `visibility: visible; opacity: 1;` : `visibility: hidden; opacity: 0;`;

type TransitionFn = 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';

const showHideTransition = (timeMs: number, transitionFn: TransitionFn = 'linear') => css`
  transition: visibility ${timeMs}ms, opacity ${timeMs}ms ${transitionFn};
`;

export { showHide, showHideTransition };
