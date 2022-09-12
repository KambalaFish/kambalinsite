import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { SecondaryButton } from '@components';
import { minDeviceMedia } from '@styles/theme';

const contactsHighlight: FlattenInterpolation<ThemeProps<DefaultTheme>> = css`
  @keyframes makeOpaque {
    from {
      opacity: 0.25;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }

    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }

    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
  ${minDeviceMedia.mobile} {
    width: 90%;
  }
  ${minDeviceMedia.tablet} {
    border-radius: 2.5rem/1.5rem;
    width: 100%;
  }
  padding: 0 2rem 2rem;
  ${minDeviceMedia.tablet} {
    padding: 0 1.5rem 1.5rem;
  }
  animation: makeOpaque ease-in-out 0.8s both 0.7s, tada ease-in-out 1s;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.contactsHighlight.backgroundColor};
  box-shadow: 0 0 4rem ${({ theme }) => theme.contactsHighlight.boxShadow.spreadRadius}
      ${({ theme }) => theme.contactsHighlight.boxShadow.color},
    inset 0 0 1rem 0.4375rem ${({ theme }) => theme.contactsHighlight.boxShadow.insetColor};
  transition: background-color ease-in-out 0.8s, box-shadow ease-in-out 0.8s;
  ${SecondaryButton} {
    background-color: ${({ theme }) => theme.contactsHighlight.secondaryButton.backgroundColor};
    padding: 1.125rem 2rem;
    ${minDeviceMedia.mobile} {
      padding: 1.125rem 3.125rem;
    }
  }
  ${SecondaryButton}:hover {
    background-color: rgba(255, 255, 255, 0.001);
  }
`;
export { contactsHighlight };
