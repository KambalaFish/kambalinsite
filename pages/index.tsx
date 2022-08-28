import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid, PrimaryButton, SecondaryButton, Text } from '@components';
import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { Title } from '@components';
import { AnimatedEmoji } from '@components';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { Avatar, TechCard, techStack } from '@components/indexPage';
import { contactsHighlight, nameAnimation, specializationAnimation } from '@styles/indexPage';

const Home: NextPage = () => {
  const router: NextRouter = useRouter();
  const styleForContactsActiveAnchor: FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined =
    router.asPath.endsWith('/#contacts') ? contactsHighlight : undefined;

  return (
    <>
      <Head>
        <title>Камбалин</title>
      </Head>
      <Container
        maxWidth={'750px'}
        px={'1rem'}
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
            css={specializationAnimation}
          >
            Я разрабатываю фронтенд-приложения
          </Title>
        </Container>

        <Container maxWidth={'43.75rem'}>
          <Text textAlign={'center'}>
            Я окончил бакалавриат факультета информационных технологий Новосибирского
            государственного университета (НГУ) в 2022 году.
            <span>🎓</span>
          </Text>
          <Text>
            На данный момент я на волонтерских началах участвую в разработке платформы для студентов
            НГУ, позволяющей размещать учебные материалы, отзывы на преподавателей и тому подобное.
            <span>🤓️🙏</span>
          </Text>
          <Text>
            Я живу в Академгородке.
            <span>🌲🐿</span>
            <br />
            ️Готов рассмотреть вакансии с переездом в Питер или Москву.
            <span>🤔</span>
          </Text>
        </Container>

        <Container>
          <Title as={'h2'} fontSize={'2rem'}>
            Технологии, которые я использую:
          </Title>
          <Grid
            gridTemplateColumns={[
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gridTemplateRows={[
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(3, 1fr)',
              'repeat(2, 1fr)',
            ]}
            // gridColumnGap={'1.5rem'}
            gridColumnGap={'4rem'}
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

        <Container
          id={'contacts'}
          css={styleForContactsActiveAnchor}
          pb={'1rem'}
          px={'1rem'}
          mx={'1rem'}
        >
          <Title as={'h2'} fontSize={'3rem'}>
            Для связи со мной
          </Title>
          <Text>Сейчас я открыт для вакансий. Вы можете связаться со мной:</Text>
          <Grid
            gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
            gridColumnGap={'1.5rem'}
            gridRowGap={['0.5rem', '0.5rem', '0']}
            justifyItems={'stretch'}
          >
            <Link href={'/contacts'}>
              <PrimaryButton>
                Мои контакты <AnimatedEmoji>👋</AnimatedEmoji>
              </PrimaryButton>
            </Link>
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
    </>
  );
};

export default Home;
