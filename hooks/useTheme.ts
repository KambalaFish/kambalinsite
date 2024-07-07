import { useCallback, useState } from 'react';
import { darkTheme, lightTheme } from '@styles/theme';
import { DefaultTheme } from 'styled-components';

export enum ThemeMode {
  dark = 'dark',
  light = 'light',
}

export type ThemeHook = {
  theme: DefaultTheme;
  themeMode: ThemeMode;
  themeToggle: () => void;
};

function useTheme(): ThemeHook {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.dark);

  const themeToggle = useCallback(
    () =>
      setThemeMode((themeMode) =>
        themeMode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light
      ),
    []
  );

  return {
    theme: themeMode === ThemeMode.light ? lightTheme : darkTheme,
    themeMode,
    themeToggle,
  };
}

export default useTheme;
