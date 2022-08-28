import React, { useMemo } from 'react';
import { Container, Grid } from '@components';
import styled from 'styled-components';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

const StyledA = styled.a<{ current?: boolean }>`
  color: ${({ theme }) => theme.styledLink.color};
  background-color: ${({ current, theme }) => current && theme.styledLink.backgroundColor};
  text-align: center;
  padding: 0.625rem;
  border-radius: 2rem;
  transition: opacity 0.25s ease-in-out 0s;
  font-weight: 500;
  &:hover {
    opacity: 0.4;
  }
`;

type StyledLinkProps = {
  href: string;
  name: string;
  current?: boolean;
};

const StyledLink: React.FC<StyledLinkProps> = ({ href, name, current }) => (
  <Link href={href} passHref>
    <StyledA current={current}>{name}</StyledA>
  </Link>
);

const navPages: { href: string; pageName: string }[] = [
  { href: '/', pageName: 'О себе' },
  { href: '/blog', pageName: 'Бложик' },
  { href: '/bookmarks', pageName: 'Пометки' },
  { href: '/projects', pageName: 'Проекты' },
];

const Links = (): React.ReactElement => {
  const router: NextRouter = useRouter();
  const items = useMemo<React.ReactElement[]>(() => {
    return navPages.map(({ href, pageName }) => (
      <StyledLink
        key={pageName}
        current={router.pathname.endsWith(href)}
        href={href}
        name={pageName}
      />
    ));
  }, [router.pathname]);

  return <>{items}</>;
};

const NavigationBar: React.FC<{ themeToggler: React.ReactElement }> = ({ themeToggler }) => (
  <Grid
    mt={'2rem'}
    as={'nav'}
    gridTemplateColumns={`1fr`}
    justifyContent={'center'}
    justifyItems={'center'}
    display={[
      /*below 576*/ 'none',
      /*min-576*/ 'grid',
      /*min-768*/ 'grid',
      /*min-992*/ 'grid',
      /*min-1200*/ 'grid',
    ]}
  >
    <Container
      alignItems={'center'}
      justifyItems={'flex-start'}
      position={'fixed'}
      top={'calc(2rem + 0.5rem)'}
      left={[0, 0, 0, 0, '5vw']}
      width={['1ch', '1ch', '1ch', 'max-content', 'max-content']}
      css={'opacity: 0.9; overflow-wrap: anywhere; white-space: break-spaces;'}
    >
      <StyledLink href={'/'} name={'Дмитрий Камбалин'} />
    </Container>
    <Container alignItems={'center'} display={['none', 'none', 'flex']}>
      <Grid
        width={'max-content'}
        gridTemplateColumns={`repeat(${navPages.length}, 1fr)`}
        justifyItems={'stretch'}
        borderRadius={'2rem'}
        padding={'0.5rem'}
        backgroundColor={'navBarBackground'}
        gridColumnGap={'0.5rem'}
      >
        <Links />
      </Grid>
    </Container>
    <Container
      flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'column', 'row']}
      alignItems={'center'}
      justifyItems={'flex-start'}
      position={'fixed'}
      top={'calc(2rem + 0.5rem)'}
      right={['1.5rem', '1.5rem', '1.5rem', 0, 'calc(5vw - 100vw + 100%)']}
      width={['1ch', '1ch', '1ch', 'max-content', 'max-content']}
      css={`
        opacity: 0.9;
        overflow-wrap: anywhere;
        white-space: break-spaces;
      `}
    >
      <StyledLink href={'/#contacts'} name={'Связаться со мной'} />
      {/*<StyledRightEdgeLink href={'/#contacts'} name={'Связаться со мной'} />*/}
      {themeToggler}
    </Container>
  </Grid>
);

export default NavigationBar;
