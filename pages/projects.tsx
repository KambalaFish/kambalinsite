import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, ModalWindow, Text, Title, Carousel } from '@components';
import Image from 'next/future/image';
import React, { useState } from 'react';
import { StyledLink } from '@components/projectsPage';
import { minDeviceMedia } from '@styles/theme';
import { ProjectCard } from '@components/projectsPage';
import { css } from 'styled-components';

const Projects: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [curIndexZavodProject, setCurIndexZavodProject] = useState(0);
  const [isZavodModalChildOpen, setIsZavodModalChildOpen] = useState(false);

  const zavodProjectModalChild = (
    <Carousel
      curIndex={curIndexZavodProject}
      setCurIndex={setCurIndexZavodProject}
      width={'calc(100% - 1.75rem * 2 - 1rem * 2)'}
      height={['25rem', '28rem', '30rem', '35rem', '40rem']}
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
        fill
      />
    </Carousel>
  );

  const zavodCardCarousel = (
    <Carousel
      curIndex={curIndexZavodProject}
      setCurIndex={setCurIndexZavodProject}
      width={'calc(100% - 1.75rem * 2)'}
      height={'100%'}
      stylesForCarouselContainer={css`
        border-radius: 15% / 10%;
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
        key={'/projects/slide-2.png'}
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
  );

  return (
    <>
      <Head>
        <title>Проекты</title>
      </Head>
      <Container minHeight={'100vh'} width={'100%'}>
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

        <Container width={'100%'} rowGap={'2rem'}>
          <ProjectCard
            projectName={'Завод'}
            carousel={zavodCardCarousel}
            tabs={[
              { tabName: 'описание', tabContent: <>Описание</> },
              { tabName: 'предыстория', tabContent: <>Предыстория</> },
              { tabName: 'технологии', tabContent: <>Технологии</> },
            ]}
            projectLink={'https://zavod.kambalin.ru'}
            gitHubLink={'https://github.com/KambalaFish/SmartEnterprise'}
          />
          <ProjectCard
            projectName={'Туса-файндер'}
            carousel={zavodCardCarousel}
            tabs={[
              { tabName: 'описание', tabContent: <>ABHUI</> },
              { tabName: 'предыстория', tabContent: <>AVHUI</> },
              { tabName: 'технологии', tabContent: <>AVEKRENDEL</> },
            ]}
            gitHubLink={'https://github.com/ToosaFinder/toosa-finder-frontend'}
          />
        </Container>

        <ModalWindow
          isVisible={isModalOpen}
          setModalVisibility={setModalOpen}
          contentAreaWidth={['90vw', '95vw', '90vw', '85vw']}
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
