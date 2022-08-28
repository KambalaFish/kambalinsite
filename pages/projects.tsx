import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Text, Title } from '@components';

const Projects: NextPage = () => (
  <>
    <Head>
      <title>Проекты</title>
    </Head>
    <Container width={'100%'} border={'1px dashed red'}>
      <Title>Проекты</Title>
      <Text>Позже я размещу здесь свои проекты</Text>
    </Container>
  </>
);

export default Projects;
