import { useCallback, useEffect, useState } from 'react';
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
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.light);

  function saveThemeMode(theme: ThemeMode) {
    setThemeMode(theme);
    window.localStorage.setItem('theme', theme);
  }

  const themeToggle = useCallback(() => {
    themeMode === ThemeMode.light ? saveThemeMode(ThemeMode.dark) : saveThemeMode(ThemeMode.light);
  }, [themeMode]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') as ThemeMode | undefined;
    /*правило такое:
    если пользователь ранее менял тему (тыкая кнопку), то ставим её как изначальную при повторном посещении страницы.
    если пользователь ни разу не выбирал тему (не тыкал кнопочку), то используем его системную тему*/
    if (savedTheme) {
      setThemeMode(savedTheme);
    } else if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeMode(ThemeMode.dark);
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setThemeMode(ThemeMode.light);
      }
    }

    const colorSchemeListener = (event: MediaQueryListEvent): void => {
      const newColorScheme = event.matches ? ThemeMode.dark : ThemeMode.light;
      setThemeMode(newColorScheme);
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', colorSchemeListener);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', colorSchemeListener);
    };
  }, []);

  return {
    theme: themeMode === ThemeMode.light ? lightTheme : darkTheme,
    themeMode,
    themeToggle,
  };
}

export default useTheme;
