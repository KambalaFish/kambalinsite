import type { AppProps } from 'next/app';
import { Layout } from '@components';
import { GlobalStyle } from '@styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useTheme, ThemeHook } from '@hooks';
import { ThemeToggle } from '@components';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, themeMode, themeToggle }: ThemeHook = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout themeToggle={<ThemeToggle themeMode={themeMode} themeToggle={themeToggle} />}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
