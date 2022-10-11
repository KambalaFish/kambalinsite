import React from 'react';
import Head from 'next/head';
import { Container, NavigationBar, Footer } from '@components';

export interface ThemeToggleProp {
  themeToggle: React.ReactElement;
}

interface LayoutProps extends ThemeToggleProp {
  children?: React.ReactElement;
}

const Layout = ({ children, themeToggle }: LayoutProps) => (
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
      minHeight={'100vh'}
      margin={'0 auto'}
      alignItems={'center'}
      justifyContent={'space-between'}
      paddingLeft={['0', 'calc(100vw - 100%)']}
    >
      <NavigationBar themeToggle={themeToggle} />

      <Container
        as={'main'}
        width={[
          'calc(100% - 2.4rem * 2 - 0.25rem * 2)',
          'calc(100% - 2.4rem * 2 - 0.5rem * 2)',
          'calc(100% - 1ch * 2 - 0.625rem * 2 * 2)',
          'calc(100vw - 1rem - 1.5rem - 16ch - 0.625rem * 2 - 17ch - 0.625rem * 2)',
          'calc(100vw - 5vw * 2 - 1.5rem - 16ch - 0.625rem * 2 - 17ch - 0.625rem * 2 - 2rem)',
        ]}
        my={'3rem'}
        mx={['calc(2.4rem + 0.25rem * 2)', 'calc(2.4rem + 0.5rem * 2)', 'auto']}
        alignContent={'center'}
      >
        {children}
      </Container>

      <Footer />
    </Container>
  </>
);

export default Layout;
