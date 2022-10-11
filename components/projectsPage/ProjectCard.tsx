import { Container, Grid, Title } from '@components';
import { TabButton } from './TabButton';
import { showHide, showHideTransition } from '@styles/utils';
import React, { useState } from 'react';
import { css } from 'styled-components';

interface ProjectCardProps {
  projectName: string;
  carousel?: React.ReactElement;
  tabs: Array<{
    tabName: string;
    tabContent: React.ReactElement;
  }>;
}

const ProjectCard = ({ projectName, carousel, tabs }: ProjectCardProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  const onTabButton = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) return;
    const targetIndex = Array.from(event.currentTarget.children).findIndex(
      (child) => child == event.target
    );
    setCurrentTab(targetIndex);
  };

  const tabsContent = tabs.map(({ tabContent, tabName }, index) => (
    <Container
      key={tabName}
      height={'100%'}
      width={'100%'}
      position={'absolute'}
      top={'0'}
      left={'0'}
      css={css`
        ${showHide(currentTab === index)}
        ${showHideTransition(
          600,
          'ease-in-out'
        )} //transition: visibility 600ms, opacity 600ms ease-out;
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
        "'projName' 'carousel' 'contentArea' 'tabButtons'",
        "'projName' 'carousel' 'contentArea' 'tabButtons'",
        "'tabButtons projName' 'carousel contentArea'",
      ]}
    >
      <Container
        height={'100%'}
        justifyContent={'center'}
        gridArea={'tabButtons'}
        flexDirection={'row'}
        columnGap={'0.5rem'}
        padding={['0.75rem', '1rem', '0']}
        borderTopLeftRadius={['0', '0', '1.5rem']}
        borderBottomLeftRadius={['1.5rem', '1.5rem', '0']}
        borderBottomRightRadius={['1.5rem', '1.5rem', '0']}
        boxShadow={[
          `inset 0rem -0.1rem 0.5rem 0rem rgb(235, 128, 32)`,
          `inset 0rem -0.1rem 0.5rem 0rem rgb(235, 128, 32)`,
          `inset 0rem 0.15rem 0.3rem 0rem rgb(255, 125, 125)`,
          // `inset 0.1rem 0.1rem 0.25rem 0rem rgb(255, 125, 125)`,
        ]}
        css={`
          background-color: rgb(12, 12, 12);
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
        <Title
          // color={'rgb(235, 128, 32)'}
          color={'rgb(235, 128, 32)'}
          fontSize={'3rem'}
          lineHeight={'1'}
          margin={'0 1rem 0 0'}
        >
          {projectName}
        </Title>
      </Container>

      <Container
        width={'100%'}
        height={['20rem', '22.5rem', '25rem']}
        justifyContent={'center'}
        gridArea={'carousel'}
        paddingY={'1rem'}
        borderBottomLeftRadius={['0', '0', '1.5rem']}
        css={`
          background-color: rgb(0, 0, 0);
        `}
      >
        {carousel}
      </Container>

      <Container
        width={'100%'}
        height={['20rem', '20rem', '100%']}
        justifyContent={'center'}
        gridArea={'contentArea'}
        position={'relative'}
        borderBottomRightRadius={['0', '0', '1.5rem']}
        overflow={'hidden'}
        css={`
          background-color: rgb(4, 4, 16);
        `}
      >
        {tabsContent}
      </Container>
    </Grid>
  );
};

export { ProjectCard };
