import React from 'react';
import Head from 'next/head';
import { Container, NavigationBar, Footer } from '@components';

export interface ThemeToggleProp {
  themeToggle: React.ReactElement;
}

interface LayoutProps extends ThemeToggleProp {
  children?: React.ReactElement;
}

const Layout = ({ children, themeToggle: themeToggle }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel={'icon shortcut'} type={'image'} href={'/favicon.ico'} />
        <meta charSet={'utf-8'} />
        <meta name={'author'} content={'Dmitry Kambalin'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
        <meta property={'og:title'} content={'Dmitry Kambalin'} />
        <meta property={'og:description'} content={'I am a Frontend developer'} />
        <meta property={'og:type'} content={'website'} />
        <meta property={'og:image'} content={'/preview.png'} />
        <meta property={'og:image:type'} content={'image/png'} />
      </Head>
      <Container
        maxWidth={'1280px'}
        minHeight={'100vh'}
        margin={'0 auto'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <NavigationBar themeToggle={themeToggle} />

        <Container
          as={'main'}
          maxWidth={'100%'}
          my={'3rem'}
          mx={['auto', 'calc(1ch + 2*0.625rem + 2ch)', 'auto']}
          alignContent={'center'}
        >
          {children}
        </Container>

        <Footer />
      </Container>
    </>
  );
};

export default Layout;
