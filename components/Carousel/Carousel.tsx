import React from 'react';
import Container from '../Container';
import { CarouselTrack } from './CarouselTrack';
import { LeftArrow, RightArrow } from './Arrows';
import { Indicator } from './Indicator';
import { CarouselSlide } from './CarouselSlide';
import { CSSProp } from 'styled-components';

interface CarouselProps {
  children: React.ReactElement[];
  curIndex: number;
  setCurIndex: React.Dispatch<React.SetStateAction<number>>;
  width: string | string[];
  height: string | string[];
  stylesForCarouselContainer?: CSSProp;
  onSlideClick?: () => void;
}

const Carousel = ({
  children,
  width,
  height,
  stylesForCarouselContainer,
  onSlideClick,
  curIndex,
  setCurIndex,
}: CarouselProps): React.ReactElement => {
  // const [curIndex, setCurIndex] = useState(0);

  const carouselChildren = React.Children.map(children, (child, index) => {
    const styles =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      child.type.default?.name === 'Image'
        ? {}
        : {
            width: width,
            height: height,
          };

    return (
      <CarouselSlide key={child.key || index} width={width} height={height}>
        {React.cloneElement(child, {
          style: styles,
        })}
        {/*{child}*/}
      </CarouselSlide>
    );
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

  const indicators = React.Children.map(children, (child, index) => (
    <Indicator isCurrent={curIndex === index} key={child.key || index} />
  ));

  if (!carouselChildren) return <></>;
  return (
    <Container
      width={'100%'}
      // border={'2px dashed blue'}
    >
      <Container
        width={'100%'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        // border={'3px dotted green'}
      >
        <LeftArrow onClick={onPrev} isVisible={curIndex !== 0} />
        <Container
          width={width}
          height={height}
          overflow={'hidden'}
          css={stylesForCarouselContainer}
          onClick={onSlideClick}
        >
          <CarouselTrack curIndex={curIndex} widthOfSlide={width}>
            {carouselChildren}
          </CarouselTrack>
        </Container>
        <RightArrow
          onClick={onNext}
          isVisible={curIndex !== children.length - 1 && children.length > 1}
        />
      </Container>
      <Container
        flexDirection={'row'}
        justifyContent={'center'}
        columnGap={'0.5rem'}
        padding={'0.25rem 0'}
        // width={'100%'}
        onClick={onIndicator}
      >
        {indicators}
      </Container>
    </Container>
  );
};

export { Carousel };
