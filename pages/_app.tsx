import type { AppProps } from 'next/app';
import { Layout } from '@components';
import { GlobalStyle } from '@styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useTheme, ThemeHook } from '@hooks';
import { ThemeToggler } from '@components';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, themeMode, themeToggler }: ThemeHook = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout themeToggler={<ThemeToggler themeMode={themeMode} themeToggler={themeToggler} />}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
