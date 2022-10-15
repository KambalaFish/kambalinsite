import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Text, Title } from '@components';
import React from 'react';
import {
  StyledLink,
  ProjectCard,
  ZavodDescription,
  ZavodPrehistory,
  ZavodTechnologies,
  makeTabWithSetIndex,
  makeTabWithoutSetIndex,
} from '@components/projectsPage';

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
            imagePaths={zavodScreenshotPaths}
            tabs={[
              { tabName: 'описание', tabContent: makeTabWithoutSetIndex(ZavodDescription) },
              {
                tabName: 'предыстория',
                tabContent: makeTabWithSetIndex(ZavodPrehistory),
              },
              { tabName: 'технологии', tabContent: makeTabWithoutSetIndex(ZavodTechnologies) },
            ]}
            projectLink={'https://zavod.kambalin.ru'}
            gitHubLink={'https://github.com/KambalaFish/SmartEnterprise'}
          />
          <ProjectCard
            projectName={'Туса-файндер'}
            imagePaths={tusafinderScreenshotPaths}
            tabs={[
              { tabName: 'описание', tabContent: makeTabWithoutSetIndex(() => <>opisanie</>) },
              {
                tabName: 'предыстория',
                tabContent: makeTabWithoutSetIndex(() => <>predistoria</>),
              },
              { tabName: 'технологии', tabContent: makeTabWithoutSetIndex(() => <>technologii</>) },
            ]}
            gitHubLink={'https://github.com/ToosaFinder/toosa-finder-frontend'}
          />
        </Container>
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

  return {
    props: { zavodScreenshotPaths, tusafinderScreenshotPaths },
  };
}

export default Projects;
