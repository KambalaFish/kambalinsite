import type { AppProps } from 'next/app';
import { Layout } from '@components';
import { GlobalStyle } from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import { useTheme, ThemeHook } from '@hooks';
import { ThemeToggle } from '@components';
import { useMemo } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, themeMode, themeToggle }: ThemeHook = useTheme();

  const themeToggleMemoized = useMemo(
    () => <ThemeToggle themeMode={themeMode} themeToggle={themeToggle} />,
    [themeMode, themeToggle]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout themeToggle={themeToggleMemoized}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
