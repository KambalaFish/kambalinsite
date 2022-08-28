import { DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';

const darkTheme: DefaultTheme = {
  breakpoints,
  backgroundColor: 'rgba(18, 18, 18, 1)',
  fontColor: 'rgba(255,255,255, 0.92)',
  colors: {
    navBarBackground: 'rgba(255,255,255, 0.15)',
    subtitleColor: 'rgba(255,255,255, 1)',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.87)',
  },
  selection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'rgba(0,195,255, 1)',
  },
  title: {
    selection: {
      color: 'rgba(0,0,0,0.9)',
      backgroundColor: 'rgba(255,255,255, 0.9)',
    },
  },
  styledLink: {
    color: '#3cffb3',
    backgroundColor: 'rgba(0,0,0, 0.85)',
  },
  techCard: {
    hover: {
      shadowColor: 'rgba(255, 255, 255, 0.8)',
      color: '#fff',
    },
  },
  button: {
    primary: {
      backgroundColor: 'rgba(187,134,252, 0.55)',
      hover: {
        backgroundColor: 'rgba(187,134,252, 0.9)',
        // backgroundColor:
        //   'radial-gradient(ellipse at 50% 50%, rgba(187, 134, 252, 0.9) 0%, rgba(187, 134, 252, 0.85) 25%, rgba(187, 134, 252, 0.8) 50%, rgba(187, 134, 252, 0.75) 75%, rgba(187, 134, 252, 0.69) 100%)',
      },
    },
    secondary: {
      color: 'rgba(255,255,255, 0.91)',
      backgroundColor: 'rgba(1,135,134, 0.55)',
    },
  },
  contactsHighlight: {
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    // backgroundColor: 'rgba(26, 26, 26, 1)',
    backgroundColor: 'rgba(14, 14, 14, 1)',
    boxShadow: {
      color: 'rgba(38, 38, 38, 1)',
      insetColor: 'rgba(42, 42, 42, 1)',
      spreadRadius: '1.6rem',
    },
    secondaryButton: {
      backgroundColor: 'rgba(1,135,134, 0.55)',
    },
  },
  pagination: {
    indexPill: {
      // backgroundColorCurrent: '#2DFFAB',
      backgroundColorCurrent: '#3DC18A',
      // backgroundColor: '#33604E',
      backgroundColor: '#3B5D4F',
      currentColor: 'rgb(18, 18, 18)',
    },
    extremeIndexPill: {
      // backgroundColorDisabled: '#2F3030',
      backgroundColorDisabled: '#1f2121',
      // backgroundColor: '#189561',
      // backgroundColor: 'rgba(24,149,97,0.65)',
      backgroundColor: '#477764',
      arrowBorderColorDisabled: '#2C3E37',
    },
    arrow: {
      borderColor: 'rgb(18, 18, 18)',
    },
  },
  bookmarks: {
    card: {
      caption: {
        insetBoxShadowColor: 'rgba(40, 40, 40, 1)',
      },
      hover: {
        boxShadowColor: 'rgba(45,55,45, 1)',
        captionBoxShadowColor: 'rgba(75, 75, 75, 1)',
      },
    },
  },
  scrollbar: {
    thumb: {
      backgroundColor: 'rgba(245,245,245,0.0625)',
      boxShadowColor: 'rgba(245,245,245,0.125)',
      hover: {
        backgroundColor: `rgba(245,245,245,0.0650)`,
        boxShadowColor: `rgba(245,245,245,0.150)`,
      },
    },
    button: {
      backgroundColor: `rgba(245,245,245,0.15)`,
      hover: {
        backgroundColor: 'rgba(245,245,245,0.25)',
      },
      arrow: {
        backgroundColor: 'rgba(245,245,245,0.25)',
        hover: {
          backgroundColor: 'rgba(245,245,245,0.5)',
        },
      },
    },
  },
};

export { darkTheme };
