import styled, { css } from 'styled-components';
import { minDeviceMedia } from '@styles/theme';

interface CarouselTrack {
  widthOfSlide: string | string[];
  curIndex: number;
}

const CarouselTrack = styled.ul<CarouselTrack>`
  padding: 0;
  margin: 0;

  width: max-content;
  list-style: none;
  height: 100%;
  transition: transform 0.5s ease-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: visible;
  ${({ widthOfSlide, curIndex }) => {
    if (Array.isArray(widthOfSlide)) {
      return css`
        transform: ${widthOfSlide[0] &&
        css`translateX(calc(-1 * ${curIndex} * ${widthOfSlide[0]}))`};
        ${minDeviceMedia.mobile} {
          transform: ${widthOfSlide[1] &&
          css`translateX(calc(-1 * ${curIndex} * ${widthOfSlide[1]}))`};
        }
        ${minDeviceMedia.tablet} {
          transform: ${widthOfSlide[2] &&
          css`translateX(calc(-1 * ${curIndex} * ${widthOfSlide[2]}))`};
        }
        ${minDeviceMedia.laptop} {
          transform: ${widthOfSlide[3] &&
          css`translateX(calc(-1 * ${curIndex} * ${widthOfSlide[3]}))`};
        }
        ${minDeviceMedia.laptopLarge} {
          transform: ${widthOfSlide[4] &&
          css`translateX(calc(-1 * ${curIndex} * ${widthOfSlide[4]}))`};
        }
      `;
    } else {
      return css`
        transform: translateX(calc(-1 * ${curIndex} * ${widthOfSlide}));
      `;
    }
  }}
`;

export { CarouselTrack };
