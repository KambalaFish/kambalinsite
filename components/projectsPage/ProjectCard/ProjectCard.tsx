import { Carousel, Container, Grid, ModalWindow, Title } from '@components';
import { TabButton } from './TabButton';
import React, { useState } from 'react';
import { css } from 'styled-components';
import { ProjectLink } from './ProjectLink';
import { VscGithubInverted } from '@react-icons/all-files/vsc/VscGithubInverted';
import { minDeviceMedia } from '@styles/theme';
import Image from 'next/future/image';
import { TabWithSetIndex, TabWithoutSetIndex, isTabWithSetIndex } from './TabInterfaces';

interface ProjectCardProps {
  projectName: string;
  imagePaths: string[];
  tabs: Array<{
    tabName: string;
    tabContent: TabWithSetIndex | TabWithoutSetIndex;
  }>;
  projectLink?: string;
  gitHubLink: string;
}

const ProjectCard = ({
  projectName,
  imagePaths,
  tabs,
  projectLink,
  gitHubLink,
}: ProjectCardProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [curImageIndex, setCurImageIndex] = useState(0);

  const onTabButton = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) return;
    const targetIndex = Array.from(event.currentTarget.children).findIndex(
      (child) => child == event.target
    );
    setCurrentTab(targetIndex);
  };

  const imageAreaContent =
    imagePaths.length > 1 ? (
      <Carousel
        curIndex={curImageIndex}
        setCurIndex={setCurImageIndex}
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
        }}
        pointerEvents={isModalOpen ? 'none' : 'auto'}
      >
        {imagePaths.map((path) => (
          <Image
            key={path}
            src={path}
            css={`
              object-fit: cover;
            `}
            alt={path}
            quality={100}
            fill
          />
        ))}
      </Carousel>
    ) : (
      <Image
        key={imagePaths[0]}
        src={imagePaths[0]}
        css={`
          object-fit: cover;
        `}
        alt={imagePaths[0]}
        quality={100}
        fill
      />
    );

  const modalWindowContent =
    imagePaths.length > 1 ? (
      <Carousel
        curIndex={curImageIndex}
        setCurIndex={setCurImageIndex}
        width={'calc(100% - 1.75rem * 2 - 1rem * 2)'}
        height={['25rem', '28rem', '30rem', '35rem', '40rem']}
      >
        {imagePaths.map((path) => (
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
    ) : (
      <Image
        key={imagePaths[0]}
        src={imagePaths[0]}
        css={`
          object-fit: cover;
          ${minDeviceMedia.tablet} {
            object-fit: scale-down;
          }
        `}
        alt={'zavod'}
        quality={100}
        fill
      />
    );

  const tabsContent = tabs.map(({ tabContent: TabContent, tabName }) => (
    <Container
      key={tabName}
      height={['20rem', '20rem', '29rem']}
      width={'100%'}
      overflowY={'auto'}
      overflowX={'hidden'}
      css={css`
        &::-webkit-scrollbar-button {
          display: none;
        }
        &::-webkit-scrollbar {
          width: 0.75rem;
        }
      `}
    >
      {isTabWithSetIndex(TabContent) ? (
        <TabContent setCurrentIndex={setCurImageIndex} />
      ) : (
        <TabContent />
      )}
    </Container>
  ));

  const tabButtons = tabs.map(({ tabName }, index) => (
    <TabButton key={tabName} isCurrent={currentTab === index}>
      {tabName}
    </TabButton>
  ));

  return (
    <>
      <Grid
        width={'100%'}
        gridTemplateColumns={['100%', '100%', 'minmax(25rem, 1fr) 3fr']}
        gridTemplateAreas={[
          "'projName' 'imageArea' 'extraInfo' 'contentArea' 'tabButtons'",
          "'projName' 'imageArea' 'extraInfo' 'contentArea' 'tabButtons'",
          "'tabButtons projName' 'imageArea contentArea' 'extraInfo contentArea'",
        ]}
        gridTemplateRows={[
          '4rem 20rem 3.5rem 20rem 4rem',
          '4rem 22.5rem 3.5rem 20rem 4rem',
          '4rem 25rem 4rem',
        ]}
      >
        <Container
          height={'100%'}
          justifyContent={'center'}
          gridArea={'tabButtons'}
          flexDirection={'row'}
          columnGap={'0.75rem'}
          borderTopLeftRadius={['0', '0', '1.5rem']}
          borderBottomLeftRadius={['1.5rem', '1.5rem', '0']}
          borderBottomRightRadius={['1.5rem', '1.5rem', '0']}
          css={css`
            background-color: ${({ theme }) =>
              theme.projectCard.tabButtonsGridArea.backgroundColor};
            box-shadow: inset 0rem -0.1rem 0.5rem 0rem ${({ theme }) => theme.projectCard.tabButtonsGridArea.mobileDevice.boxShadowColor};
            ${minDeviceMedia.tablet} {
              // box-shadow: inset 0 0.15rem 0.3rem 0
              //   ${({ theme }) => theme.projectCard.tabButtonsGridArea.boxShadowColor};
              box-shadow: inset 0.1rem 0.1rem 0.3rem 0
                ${({ theme }) => theme.projectCard.tabButtonsGridArea.boxShadowColor};
            }
          `}
          onClick={onTabButton}
        >
          {tabButtons}
        </Container>

        <Container
          flexDirection={'row'}
          width={'100%'}
          height={'100%'}
          justifyContent={['center', 'center', 'flex-end']}
          gridArea={'projName'}
          padding={['0 0 0.125rem 0', '0 0 0.25rem 0']}
          boxShadow={[
            'inset 0rem 0.1rem 0.5rem 0rem rgb(235, 128, 32)',
            'inset 0rem 0.1rem 0.5rem 0rem rgb(235, 128, 32)',
            'none',
          ]}
          borderTopRightRadius={'1.5rem'}
          borderTopLeftRadius={['1.5rem', '1.5rem', '0']}
          css={css`
            background-color: ${({ theme }) => theme.projectCard.backgroundColor};
            border-top: 0;
            border-right: 0;
            ${minDeviceMedia.tablet} {
              border-top: 1px solid
                ${({ theme }) => theme.projectCard.projNameGridArea.border.color};
              border-right: 1px solid
                ${({ theme }) => theme.projectCard.projNameGridArea.border.color};
            }
          `}
        >
          <Title
            fontSize={'3rem'}
            lineHeight={'1'}
            margin={['0', '0', '0 1rem 0 0']}
            css={css`
              color: ${({ theme }) => theme.projectCard.cardTitle.color};
            `}
          >
            {projectName}
          </Title>
        </Container>

        <Container
          width={'100%'}
          height={['20rem', '22.5rem', '25rem']}
          justifyContent={'center'}
          gridArea={'imageArea'}
          paddingY={'1rem'}
          css={css`
            background-color: ${({ theme }) => theme.projectCard.backgroundColor};
          `}
        >
          {imageAreaContent}
        </Container>

        <Container
          height={'100%'}
          width={'100%'}
          justifyContent={'flex-start'}
          gridArea={'contentArea'}
          overflow={'hidden'}
          borderBottomRightRadius={['0', '0', '2rem']}
          css={css`
            background-color: ${({ theme }) =>
              theme.projectCard.contentAreaGridArea.backgroundColor};
            box-shadow: none;
            ${minDeviceMedia.tablet} {
              box-shadow: inset -0.05rem -0.05rem 0.1rem 0
                ${({ theme }) => theme.projectCard.contentAreaGridArea.boxShadowColor};
            }
          `}
        >
          <Container
            width={'100%'}
            flexDirection={'column'}
            css={`
              transform: translateY(calc(-1 * ${currentTab} * 20rem));

              ${minDeviceMedia.tablet} {
                transform: translateY(calc(-1 * ${currentTab} * 29rem));
              }

              transition: transform 0.5s ease-out;
            `}
          >
            {tabsContent}
          </Container>
        </Container>

        <Container
          height={'100%'}
          gridArea={'extraInfo'}
          flexDirection={'row'}
          justifyContent={'center'}
          borderBottomLeftRadius={['0', '0', '1.5rem']}
          columnGap={'1rem'}
          css={css`
            background-color: ${({ theme }) => theme.projectCard.extraInfoGridArea.backgroundColor};
            box-shadow: none;
            border-left: 0.1rem solid
              ${({ theme }) => theme.projectCard.extraInfoGridArea.borderColor};
            border-right: 0.1rem solid
              ${({ theme }) => theme.projectCard.extraInfoGridArea.borderColor};
            ${minDeviceMedia.tablet} {
              box-shadow: inset 0.1rem -0.1rem 0.3rem 0 ${({ theme }) => theme.projectCard.extraInfoGridArea.boxShadowColor};
              border-left: 0;
              border-right: 0;
            }
          `}
        >
          {projectLink && (
            <ProjectLink href={projectLink} target={'_blank'} rel='noreferrer'>
              попробовать
            </ProjectLink>
          )}
          <a
            css={css`
              cursor: pointer;
              color: ${({ theme }) => theme.projectCard.projectLink.backgroundColor};
              transition: color 0.4s ease-in;
              :hover {
                color: ${({ theme }) => theme.projectCard.projectLink.onHover.backgroundColor};
                transition: color 0.6s ease-out;
              }
            `}
            href={gitHubLink}
            target={'_blank'}
            rel='noreferrer'
          >
            <VscGithubInverted size={'2rem'} />
          </a>
        </Container>
      </Grid>
      <ModalWindow
        isVisible={isModalOpen}
        setModalVisibility={setModalOpen}
        contentAreaWidth={['90%', '95%', '90%', '85%']}
      >
        {modalWindowContent}
      </ModalWindow>
    </>
  );
};

export { ProjectCard };
