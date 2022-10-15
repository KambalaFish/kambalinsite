import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, ModalWindow, Text, Title, Carousel } from '@components';
import Image from 'next/future/image';
import React, { useState } from 'react';
import {
  StyledLink,
  ProjectCard,
  ZavodDescription,
  ZavodPrehistory,
  ZavodTechnologies,
} from '@components/projectsPage';
import { minDeviceMedia } from '@styles/theme';
import { css } from 'styled-components';

import * as fs from 'fs';
import path from 'path';

interface ProjectPageProps {
  zavodScreenshotPaths: string[];
  tusafinderScreenshotPaths: string[];
}

const Projects: NextPage<ProjectPageProps> = ({
  zavodScreenshotPaths,
  tusafinderScreenshotPaths,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [curIndexZavodProject, setCurIndexZavodProject] = useState(0);
  const [isZavodModalChildOpen, setIsZavodModalChildOpen] = useState(false);

  const [curIndexTusafinderProject, setCurIndexTusafinderProject] = useState(0);
  const [isTusafinderModalChildOpen, setIsTusafinderModalChildOpen] = useState(false);

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
      {zavodScreenshotPaths.map((path) => (
        <Image
          key={path}
          src={path}
          css={`
            object-fit: cover;
          `}
          alt={'zavod'}
          quality={100}
          fill
        />
      ))}
    </Carousel>
  );

  const zavodProjectModalChild = (
    <Carousel
      curIndex={curIndexZavodProject}
      setCurIndex={setCurIndexZavodProject}
      width={'calc(100% - 1.75rem * 2 - 1rem * 2)'}
      height={['25rem', '28rem', '30rem', '35rem', '40rem']}
    >
      {zavodScreenshotPaths.map((path) => (
        <Image
          key={path}
          src={path}
          css={`
            object-fit: cover;
            ${minDeviceMedia.tablet} {
              object-fit: scale-down;
            }
          `}
          alt={path}
          quality={100}
          fill
        />
      ))}
    </Carousel>
  );

  const tusafinderCardCarousel = (
    <Carousel
      curIndex={curIndexTusafinderProject}
      setCurIndex={setCurIndexTusafinderProject}
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
        setIsTusafinderModalChildOpen(true);
      }}
      pointerEvents={isZavodModalChildOpen ? 'none' : 'auto'}
    >
      {tusafinderScreenshotPaths.map((path) => (
        <Image
          key={path}
          src={path}
          css={`
            object-fit: cover;
          `}
          alt={'zavod'}
          quality={100}
          fill
        />
      ))}
    </Carousel>
  );

  const tusafinderProjectModalChild = (
    <Carousel
      curIndex={curIndexTusafinderProject}
      setCurIndex={setCurIndexTusafinderProject}
      width={'calc(100% - 1.75rem * 2 - 1rem * 2)'}
      height={['25rem', '28rem', '30rem', '35rem', '40rem']}
    >
      {tusafinderScreenshotPaths.map((path) => (
        <Image
          key={path}
          src={path}
          css={`
            object-fit: cover;
            ${minDeviceMedia.tablet} {
              object-fit: scale-down;
            }
          `}
          alt={path}
          quality={100}
          fill
        />
      ))}
    </Carousel>
  );

  return (
    <>
      <Head>
        <title>Проекты</title>
      </Head>
      <Container minHeight={'100vh'} width={'100%'} rowGap={'2rem'}>
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

        <Container width={'100%'} rowGap={'4rem'}>
          <ProjectCard
            projectName={'Завод'}
            carousel={zavodCardCarousel}
            tabs={[
              { tabName: 'описание', tabContent: <ZavodDescription /> },
              {
                tabName: 'предыстория',
                tabContent: <ZavodPrehistory setCurrentSlide={setCurIndexZavodProject} />,
              },
              { tabName: 'технологии', tabContent: <ZavodTechnologies /> },
            ]}
            projectLink={'https://zavod.kambalin.ru'}
            gitHubLink={'https://github.com/KambalaFish/SmartEnterprise'}
          />
          <ProjectCard
            projectName={'Туса-файндер'}
            carousel={tusafinderCardCarousel}
            tabs={[
              { tabName: 'описание', tabContent: <>opisanie</> },
              { tabName: 'предыстория', tabContent: <>predistoria</> },
              { tabName: 'технологии', tabContent: <>technologii</> },
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
            if (isTusafinderModalChildOpen) {
              setIsTusafinderModalChildOpen(false);
            }
          }}
        >
          {isZavodModalChildOpen && zavodProjectModalChild}
          {isTusafinderModalChildOpen && tusafinderProjectModalChild}
        </ModalWindow>
      </Container>
    </>
  );
};

export function getStaticProps() {
  const zavodDir = path.join(process.cwd(), 'public', 'projects', 'zavod');
  const tusafinderDir = path.join(process.cwd(), 'public', 'projects', 'tusafinder');

  const getFormattedImagePaths = (absoluteDirPath: string, relativeDirPath: string) => {
    return fs
      .readdirSync(absoluteDirPath)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map((zfn) => {
        return `${relativeDirPath}${zfn}`;
      });
  };

  const zavodScreenshotPaths = getFormattedImagePaths(zavodDir, '/projects/zavod/');
  const tusafinderScreenshotPaths = getFormattedImagePaths(tusafinderDir, '/projects/tusafinder/');

  console.log(zavodScreenshotPaths);

  return {
    props: { zavodScreenshotPaths, tusafinderScreenshotPaths },
  };
}

export default Projects;
