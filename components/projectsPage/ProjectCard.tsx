import { Container, Grid, Title } from '@components';
import { TabButton } from './TabButton';
import React, { useState } from 'react';
import { css } from 'styled-components';
import { ProjectLink } from './ProjectLink';
import { VscGithubInverted } from '@react-icons/all-files/vsc/VscGithubInverted';
import { minDeviceMedia } from '@styles/theme';

interface ProjectCardProps {
  projectName: string;
  carousel?: React.ReactElement;
  tabs: Array<{
    tabName: string;
    tabContent: React.ReactElement;
  }>;
  projectLink?: string;
  gitHubLink: string;
}

const ProjectCard = ({
  projectName,
  carousel,
  tabs,
  projectLink,
  gitHubLink,
}: ProjectCardProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  const onTabButton = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) return;
    const targetIndex = Array.from(event.currentTarget.children).findIndex(
      (child) => child == event.target
    );
    setCurrentTab(targetIndex);
  };

  const tabsContent = tabs.map(({ tabContent, tabName }) => (
    <Container
      key={tabName}
      height={['20rem', '20rem', '28.5rem']}
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
      {tabContent}
    </Container>
  ));

  const tabButtons = tabs.map(({ tabName }, index) => (
    <TabButton key={tabName} isCurrent={currentTab === index}>
      {tabName}
    </TabButton>
  ));

  return (
    <Grid
      width={'100%'}
      gridTemplateColumns={['100%', '100%', 'minmax(25rem, 1fr) 3fr']}
      gridTemplateAreas={[
        "'projName' 'carousel' 'extraInfo' 'contentArea' 'tabButtons'",
        "'projName' 'carousel' 'extraInfo' 'contentArea' 'tabButtons'",
        "'tabButtons projName' 'carousel contentArea' 'extraInfo contentArea'",
      ]}
      gridTemplateRows={[
        '3.5rem 20rem 3.5rem 20rem 3.5rem',
        '3.5rem 22.5rem 3.5rem 20rem 3.5rem',
        '3.5rem 25rem 3.5rem',
      ]}
    >
      <Container
        height={'100%'}
        justifyContent={'center'}
        gridArea={'tabButtons'}
        flexDirection={'row'}
        columnGap={'0.5rem'}
        padding={'0'}
        borderTopLeftRadius={['0', '0', '1.5rem']}
        borderBottomLeftRadius={['1.5rem', '1.5rem', '0']}
        borderBottomRightRadius={['1.5rem', '1.5rem', '0']}
        boxShadow={[
          `inset 0rem -0.1rem 0.5rem 0rem rgb(235, 128, 32)`,
          `inset 0rem -0.1rem 0.5rem 0rem rgb(235, 128, 32)`,
          `inset 0rem 0.15rem 0.3rem 0rem rgb(255, 125, 125)`,
        ]}
        css={`
          background-color: rgb(4, 4, 4);
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
        padding={'0.25rem'}
        borderTop={['0', '0', '1px solid rgb(235, 128, 32)']}
        borderRight={['0', '0', '1px solid rgb(235, 128, 32)']}
        boxShadow={[
          'inset 0rem 0.1rem 0.5rem 0rem rgb(235, 128, 32)',
          'inset 0rem 0.1rem 0.5rem 0rem rgb(235, 128, 32)',
          'none',
        ]}
        borderTopRightRadius={'1.5rem'}
        borderTopLeftRadius={['1.5rem', '1.5rem', '0']}
        css={`
          background-color: rgb(0, 0, 0);
        `}
      >
        <Title color={'rgb(235, 128, 32)'} fontSize={'3rem'} lineHeight={'1'} margin={'0 1rem 0 0'}>
          {projectName}
        </Title>
      </Container>

      <Container
        width={'100%'}
        height={['20rem', '22.5rem', '25rem']}
        justifyContent={'center'}
        gridArea={'carousel'}
        paddingY={'1rem'}
        css={`
          background-color: rgb(0, 0, 0);
        `}
      >
        {carousel}
      </Container>

      <Container
        height={'100%'}
        width={'100%'}
        justifyContent={'flex-start'}
        gridArea={'contentArea'}
        overflow={'hidden'}
        borderBottomRightRadius={['0', '0', '2rem']}
        boxShadow={['0', '0', 'inset -0.05rem -0.05rem 0.1rem 0 rgb(255, 192, 32)']}
        css={`
          background-color: rgb(0, 0, 64);
        `}
      >
        <Container
          width={'100%'}
          flexDirection={'column'}
          css={`
            transform: translateY(calc(-1 * ${currentTab} * 20rem));
            ${minDeviceMedia.tablet} {
              transform: translateY(calc(-1 * ${currentTab} * 28.5rem));
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
        boxShadow={['0', '0', 'inset 0rem 0rem 0.25rem 0 rgb(235, 128, 32)']}
        css={`
          background-color: rgba(235, 128, 32, 0.05);
        `}
        borderRight={'0.1rem solid rgb(235, 128, 32)'}
        borderLeft={'0.1rem solid rgb(235, 128, 32)'}
      >
        {projectLink && (
          <ProjectLink href={projectLink} target={'_blank'} rel='noreferrer'>
            попробовать
          </ProjectLink>
        )}
        <a
          css={`
            cursor: pointer;
            color: salmon;
            transition: color 0.4s ease-in;
            :hover {
              color: lightblue;
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
  );
};

export { ProjectCard };
