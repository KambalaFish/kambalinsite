import { Container, Grid } from '@components';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { navPages } from '../navPages';
import { ThemeToggleProp } from '../../Layout';
import { Links } from '../Links';
import { useRouter } from 'next/router';

const StyledA = styled.a<{ current?: boolean }>`
  color: ${({ theme }) => theme.styledLink.color};
  background-color: ${({ current, theme }) => current && theme.styledLink.backgroundColor};
  text-align: center;
  padding: 0.625rem;
  border-radius: 2rem;
  transition: opacity 0.25s ease-in-out 0s;
  font-weight: 500;
  cursor: pointer;
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

const linksRenderer = (href: string, pageName: string, isCurrent: boolean): React.ReactElement => (
  <StyledLink key={pageName} current={isCurrent} href={href} name={pageName} />
);

const NonMobileMenu = ({ themeToggle }: ThemeToggleProp): React.ReactElement => {
  const router = useRouter();
  const onNameClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    router.push('/').then(
      (isSuccess) => {
        if (isSuccess) {
          const mainContainer = document.querySelector('#mainContainer');
          if (mainContainer) {
            mainContainer.scrollTop = 0;
          }
        }
      },
      (reason) => {
        console.error(reason);
      }
    );
  };
  return (
    <Grid
      mt={'2rem'}
      gridTemplateColumns={`1fr`}
      justifyContent={'center'}
      justifyItems={'center'}
      display={['none', 'none', 'grid']}
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
        <StyledA onClick={onNameClick}>Дмитрий Камбалин</StyledA>
      </Container>
      <Container alignItems={'center'}>
        <Grid
          width={'max-content'}
          gridTemplateColumns={`repeat(${navPages.length}, 1fr)`}
          justifyItems={'stretch'}
          borderRadius={'2rem'}
          padding={'0.5rem'}
          backgroundColor={'navBarBackground'}
          gridColumnGap={'0.5rem'}
        >
          <Links render={linksRenderer} />
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
        {themeToggle}
      </Container>
    </Grid>
  );
};

export { NonMobileMenu };
