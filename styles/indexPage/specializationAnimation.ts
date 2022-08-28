import { css, FlattenSimpleInterpolation } from 'styled-components';
const specializationAnimation: FlattenSimpleInterpolation = css`
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    50% {
      opacity: 1;
    }
  }
  animation: 1s linear 1s zoomIn both;
`;
export { specializationAnimation };
