import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid, PrimaryButton, SecondaryButton, Text } from '@components';
import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { Title } from '@components';
import { AnimatedEmoji } from '@components';
import { NextRouter, useRouter } from 'next/router';
import { Avatar, TechCard, techStack } from '@components/indexPage';
import { contactsHighlight, nameAnimation, specializationAnimation } from '@styles/indexPage';
import { ModalWindow } from '@components';
import { useState } from 'react';
import { Contacts } from '@components/indexPage';

const Home: NextPage = () => {
  const router: NextRouter = useRouter();
  const styleForContactsActiveAnchor: FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined =
    router.asPath.endsWith('/#contacts') ? contactsHighlight : undefined;
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <>
      <Head>
        <title>Камбалин</title>
      </Head>
      <Container
        maxWidth={'750px'}
        css={`
          row-gap: 4rem;
        `}
      >
        <Container>
          <Avatar />
          <Title css={nameAnimation}>Дмитрий Камбалин</Title>
          <Title
            as={'h2'}
            fontSize={'2rem'}
            color={'subtitleColor'}
            fontWeight={'500'}
            maxWidth={['20ch', 'max-content']}
            css={specializationAnimation}
          >
            Я разрабатываю фронтенд-приложения
          </Title>
        </Container>

        <Container maxWidth={['40ch', '70ch']}>
          <Text textAlign={'center'} mb={['1.5rem', '0.75rem']}>
            Я окончил бакалавриат факультета информационных технологий Новосибирского
            государственного университета (НГУ) в 2022 году
            <span>🎓</span>
          </Text>
          <Text mb={'0'}>
            Я живу в Академгородке
            <span>🌲🐿</span>
            <br />
            ️Также готов рассмотреть удалёнку
            <span>🤔</span>
          </Text>
        </Container>

        <Container>
          <Title as={'h2'} fontSize={'2rem'} maxWidth={['19ch', 'max-content']}>
            Технологии, которые я использую:
          </Title>
          <Grid
            gridTemplateColumns={[
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(9, 1fr)',
              'repeat(5, 1fr)',
            ]}
            gridColumnGap={['4rem', '4rem', '1rem', '4rem']}
            gridRowGap={'2rem'}
            pt={'1rem'}
          >
            {techStack.map(({ Icon, url, title }) => (
              <TechCard key={url} href={url} target={'_blank'}>
                <Icon size={'3em'} style={{ borderRadius: '50%/15%' }} title={title} />
              </TechCard>
            ))}
          </Grid>
        </Container>

        <Container id={'contacts'} css={styleForContactsActiveAnchor}>
          <Title as={'h2'} fontSize={'3rem'} width={['9ch', 'auto']}>
            Для связи со мной
          </Title>
          <Text width={['29ch', 'auto']}>
            Сейчас я открыт для вакансий. Вы можете связаться со мной:
          </Text>
          <Grid
            gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
            gridColumnGap={['0', '0', '1.25rem']}
            gridRowGap={['0.75rem', '0.5rem', '0']}
            justifyItems={'stretch'}
          >
            <PrimaryButton onClick={() => setModalVisibility(true)}>
              Мои контакты <AnimatedEmoji>👋</AnimatedEmoji>
            </PrimaryButton>
            <a
              href={'https://calendly.com/kambalindmitry/meeting'}
              target={'_blank'}
              rel='noreferrer'
            >
              <SecondaryButton>
                Запланировать созвон{' '}
                <AnimatedEmoji variant={'verticalTranslation'}>📆</AnimatedEmoji>
              </SecondaryButton>
            </a>
          </Grid>
        </Container>
      </Container>
      <ModalWindow
        isVisible={isModalVisible}
        setModalVisibility={setModalVisibility}
        contentAreaWidth={'max-content'}
      >
        <Contacts />
      </ModalWindow>
    </>
  );
};

export default Home;
