import React from 'react';
import Container from '../Container';
import { CarouselTrack } from './CarouselTrack';
import { LeftArrow, RightArrow } from './Arrows';
import { Indicator } from './Indicator';
import { CarouselSlide } from './CarouselSlide';
import { CSSProp } from 'styled-components';
import { useMeasure } from '@hooks';

interface CarouselProps {
  children: React.ReactElement[];
  curIndex: number;
  setCurIndex: React.Dispatch<React.SetStateAction<number>>;
  width: string | string[];
  height: string | string[];
  stylesForCarouselContainer?: CSSProp;
  onSlideClick?: () => void;
  pointerEvents?: 'auto' | 'none';
}

const Carousel = ({
  children,
  width,
  height,
  stylesForCarouselContainer,
  onSlideClick,
  curIndex,
  setCurIndex,
  pointerEvents = 'auto',
}: CarouselProps): React.ReactElement => {
  const [carouselTrackContainerRef, carouselTrackContainerRect] = useMeasure<HTMLDivElement>();
  const [indicatorsContainerRef, indicatorsContainerRect] = useMeasure<HTMLDivElement>();

  const carouselSlides: React.ReactElement[] = [];
  const indicators: React.ReactElement[] = [];

  React.Children.forEach<React.ReactElement>(children, (child, index) => {
    const key = child.key || index;
    const styles =
      Object.prototype.hasOwnProperty.call(child.props, 'fill') ||
      Object.prototype.hasOwnProperty.call(child.props, 'width')
        ? null
        : {
            ...carouselTrackContainerRect,
          };

    carouselSlides.push(
      <CarouselSlide
        key={key}
        width={`${carouselTrackContainerRect.width}px`}
        height={`${carouselTrackContainerRect.height}px`}
      >
        {!styles
          ? child
          : React.cloneElement(child, {
              style: styles,
            })}
      </CarouselSlide>
    );

    /*One imperfectness of the carousel:
    if we add one new child element in beginning of children array,
    then curIndex will shift one position away from the actual currentElement.
    But I will leave it as is for now :)
    */
    indicators.push(<Indicator isCurrent={curIndex === index} key={key} />);
  });

  const onNext = () => {
    if (curIndex < children.length - 1) {
      setCurIndex((curIndex) => curIndex + 1);
    }
  };

  const onPrev = () => {
    if (curIndex > 0) {
      setCurIndex((curIndex) => curIndex - 1);
    }
  };

  const onIndicator = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) return;
    const targetIndex = Array.from(event.currentTarget.children).findIndex(
      (child) => child == event.target
    );
    setCurIndex(targetIndex);
  };

  if (carouselSlides.length === 0) return <></>;

  return (
    <Container width={'100%'} height={'100%'} justifyContent={'flex-start'}>
      <Container
        width={'100%'}
        height={`calc(100% - ${indicatorsContainerRect.height}px)`}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <LeftArrow
          onClick={onPrev}
          isVisible={curIndex !== 0}
          css={`
            pointer-events: ${pointerEvents};
          `}
        />
        <Container
          width={width}
          height={height}
          ref={carouselTrackContainerRef}
          overflow={'hidden'}
          css={stylesForCarouselContainer}
          onClick={onSlideClick}
        >
          <CarouselTrack curIndex={curIndex} widthOfSlide={`${carouselTrackContainerRect.width}px`}>
            {carouselSlides}
          </CarouselTrack>
        </Container>
        <RightArrow
          onClick={onNext}
          isVisible={curIndex !== children.length - 1 && children.length > 1}
          css={`
            pointer-events: ${pointerEvents};
          `}
        />
      </Container>
      <Container
        ref={indicatorsContainerRef}
        flexDirection={'row'}
        justifyContent={'center'}
        columnGap={'0.5rem'}
        padding={'0.5rem 0'}
        width={'100%'}
        onClick={onIndicator}
        css={`
          pointer-events: ${pointerEvents};
        `}
      >
        {indicators}
      </Container>
    </Container>
  );
};

export { Carousel };
