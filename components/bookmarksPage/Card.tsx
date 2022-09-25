import { Container, Text } from '@components';
import Image from 'next/future/image';
import React from 'react';
import { css, useTheme } from 'styled-components';
import { customLoader } from '@api';

interface CardProps {
  imgSrc: string;
  imgPriority: boolean;
  title: string;
  href: string;
  cardWidth: string | string[];
  imgSizes: string;
}

const cardLoader = customLoader({ format: 'auto' });
const textHeight = `calc(3 * 1.1 * 1rem + 0.25rem + 0.25rem)`;

const Card = ({
  imgSrc,
  title,
  href,
  imgPriority,
  cardWidth,
  imgSizes,
}: CardProps): React.ReactElement => {
  const theme = useTheme();
  return (
    <Container
      as={'a'}
      href={href}
      target={'_blank'}
      width={cardWidth}
      margin={0}
      padding={0}
      overflow={'hidden'}
      borderRadius={'10% 10% 5% 5%/15%'}
      css={css`
        cursor: pointer;
        transition: all 0.4s ease-in;
        &:hover {
          box-shadow: 0 0 2rem 1rem ${({ theme }) => theme.bookmarks.card.hover.boxShadowColor};
          transform: scale(1.005);
          ${Text} {
            box-shadow: inset 0 -0.2rem 0.7rem 0.5rem ${({ theme }) => theme.bookmarks.card.hover.captionBoxShadowColor};
          }
        }
      `}
    >
      <Container
        width={'100%'}
        height={
          Array.isArray(cardWidth)
            ? cardWidth.map((width) => `calc(${width} / 16 * 8)`)
            : `calc(${cardWidth} / 16 * 8)`
        }
        position={'relative'}
      >
        <Image
          src={imgSrc}
          loader={cardLoader}
          fill
          quality={100}
          sizes={imgSizes}
          alt={title}
          priority={imgPriority}
        />
      </Container>
      <Text
        margin={0}
        boxShadow={`inset 0 0 0.5rem 0.4rem ${theme.bookmarks.card.caption.insetBoxShadowColor}`}
        width={'100%'}
        lineHeight={1.1}
        height={textHeight}
        textAlign={'start'}
        overflow={'hidden'}
        padding={'0.25rem 1rem 0rem'}
        fontWeight={300}
        fontSize={'1rem'}
      >
        {title}
      </Text>
    </Container>
  );
};

export { Card, textHeight };
