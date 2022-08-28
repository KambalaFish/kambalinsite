import styled, { css, keyframes } from 'styled-components';
import { PrimaryButton, SecondaryButton } from './Button';

const handRotate = keyframes`
  10%{
    transform: rotate(15deg);
  }
  20%{
    transform: rotate(0deg);
  }
  30%{
    transform: rotate(15deg);
  }
  40%{
    transform: rotate(0deg);
  }
`;
const vertTranslation = keyframes`
  10%{
    transform: translateY(-0.2rem);
  }
  20%{
    transform: translateY(0.2rem);
  }
  30%{
    transform: translateY(-0.2rem);
  }
  40%{
    transform: translateY(0rem);
  }
`;

type AnimatedEmojiProps = { variant?: 'rotation' | 'verticalTranslation' };

const AnimatedEmoji = styled.span<AnimatedEmojiProps>`
  display: inline-block;
  font-size: 1.3rem;
  position: relative;
  top: 0.125rem;
  left: 0.125rem;

  ${PrimaryButton}:hover & {
    animation-play-state: paused;
  }
  ${SecondaryButton}:hover & {
    animation-play-state: paused;
  }
  transform: ${({ variant }) => (variant === 'rotation' && `rotate(0deg)`) || `translateY(0rem)`};
  transform-origin: ${({ variant }) => variant === 'rotation' && `right bottom`};
  animation: ${({ variant }) =>
    variant === 'rotation'
      ? css`
          ${handRotate} 1.4s linear infinite normal
        `
      : css`
          ${vertTranslation} 1.4s linear infinite normal
        `};
`;

AnimatedEmoji.defaultProps = { variant: 'rotation' };

export default AnimatedEmoji;
