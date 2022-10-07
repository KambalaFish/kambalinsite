import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, ModalWindow, Text, Title, Carousel } from '@components';
import Image from 'next/future/image';
import React, { useState } from 'react';
import { css } from 'styled-components';
import { StyledLink } from '@components/projectsPage';
import { minDeviceMedia } from '@styles/theme';

const Projects: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [curIndexZavodProject, setCurIndexZavodProject] = useState(0);
  const [isZavodModalChildOpen, setIsZavodModalChildOpen] = useState(false);

  const zavodProjectModalChild = (
    <Carousel
      curIndex={curIndexZavodProject}
      setCurIndex={setCurIndexZavodProject}
      width={['23rem', '32rem', '52.5rem', '55rem', '70rem']}
      height={['25rem', '32rem', '30rem', '35rem', '40rem']}
    >
      <Image
        key={'/projects/slide-1.png'}
        src={'/projects/slide-1.png'}
        css={`
          object-fit: cover;
          ${minDeviceMedia.tablet} {
            object-fit: scale-down;
          }
        `}
        alt={'zavod1'}
        quality={100}
        sizes={'100vw'}
        fill
      />
      <Image
        key={'/projects/slide-2.png'}
        src={'/projects/slide-2.webp'}
        css={`
          object-fit: cover;
          ${minDeviceMedia.tablet} {
            object-fit: scale-down;
          }
        `}
        alt={'zavod2'}
        quality={100}
        sizes={'100vw'}
        fill
      />
      <Image
        key={'/projects/slide-3.png'}
        src={'/projects/slide-3.png'}
        css={`
          object-fit: cover;
          ${minDeviceMedia.tablet} {
            object-fit: scale-down;
          }
        `}
        alt={'zavod3'}
        quality={100}
        sizes={'100vw'}
        fill
      />
    </Carousel>
  );

  return (
    <>
      <Head>
        <title>Проекты</title>
      </Head>
      <Container maxWidth={'100%'} minHeight={'100vh'}>
        <Container>
          <Title>Проекты</Title>
          <Text width={['30ch', '40ch', 'auto']}>
            Я всегда работаю над новыми проектами. Вы можете найти их на моём{' '}
            <StyledLink href={'https://github.com/KambalaFish/'} target={'_blank'} rel={'external'}>
              Github
            </StyledLink>
            .
          </Text>
        </Container>
        <Container width={'100%'}>
          <Carousel
            curIndex={curIndexZavodProject}
            setCurIndex={setCurIndexZavodProject}
            width={'300px'}
            height={'300px'}
            stylesForCarouselContainer={css`
              border-radius: 10%;
              cursor: pointer;
              :hover {
                scale: 1.01;
                transition: scale 0.4s linear;
              }
              transition: scale 0.4s linear;
            `}
            onSlideClick={() => {
              setModalOpen(true);
              setIsZavodModalChildOpen(true);
            }}
            pointerEvents={isZavodModalChildOpen ? 'none' : 'auto'}
          >
            <Image
              key={'/projects/slide-1.png'}
              src={'/projects/slide-1.png'}
              css={`
                object-fit: cover;
              `}
              alt={'zavod1'}
              quality={100}
              sizes={'100vw'}
              fill
            />
            <Image
              key={'/projects/slide-2.webp'}
              src={'/projects/slide-2.webp'}
              css={`
                object-fit: cover;
              `}
              alt={'zavod2'}
              quality={100}
              sizes={'100vw'}
              fill
            />
            <Image
              key={'/projects/slide-3.png'}
              src={'/projects/slide-3.png'}
              css={`
                object-fit: cover;
              `}
              alt={'zavod3'}
              quality={100}
              sizes={'100vw'}
              fill
            />
          </Carousel>
        </Container>
        <ModalWindow
          isVisible={isModalOpen}
          setModalVisibility={setModalOpen}
          contentAreaWidth={['100%', '100%', '95%', '80%']}
          onCloseCb={() => {
            if (isZavodModalChildOpen) {
              setIsZavodModalChildOpen(false);
            }
          }}
        >
          {isZavodModalChildOpen && zavodProjectModalChild}
        </ModalWindow>
      </Container>
    </>
  );
};

export default Projects;
