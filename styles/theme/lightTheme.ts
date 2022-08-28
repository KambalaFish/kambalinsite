import { DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';

const ltBackgroundColor = 'rgb(245,245,245)';

const lightTheme: DefaultTheme = {
  breakpoints,
  backgroundColor: ltBackgroundColor,
  fontColor: '#000',
  colors: {
    navBarBackground: 'rgba(0,0,0,0.1)',
    subtitleColor: 'rgba(0,0,0,0.9)',
  },
  text: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  selection: {
    color: '#000',
    backgroundColor: 'rgba(180,130,209,1)',
  },
  title: {
    selection: {
      color: '#fff',
      backgroundColor: '#000',
    },
  },
  styledLink: {
    color: '#000',
    backgroundColor: '#fff',
  },
  techCard: {
    hover: {
      shadowColor: 'rgba(0, 0, 0, 0.8)',
      color: '#000',
    },
  },
  button: {
    primary: {
      // backgroundColor: '#212121',
      backgroundColor: 'rgba(0,0,0,0.725)',
      hover: {
        backgroundColor: '#000',
      },
    },
    secondary: {
      color: 'rgba(0, 0, 0, 1)',
      backgroundColor: 'rgba(225,225,220, 1)',
    },
  },
  contactsHighlight: {
    backgroundColor: 'rgba(230, 230, 230, 1)',
    boxShadow: {
      color: 'rgba(0, 0, 0, 0.3)',
      insetColor: 'rgba(0, 0, 0, 0.15)',
      spreadRadius: '1.75rem',
    },
    secondaryButton: {
      // backgroundColor: 'rgba(0, 0, 0, 0.04)',
      backgroundColor: 'rgba(220,220,215, 1)',
    },
  },
  pagination: {
    indexPill: {
      backgroundColorCurrent: 'rgba(0,0,0,0.35)',
      backgroundColor: 'rgba(0,0,0,0.1)',
      currentColor: ltBackgroundColor,
    },
    extremeIndexPill: {
      backgroundColorDisabled: 'rgba(0,0,0, 0.035)',
      backgroundColor: 'rgba(0,0,0,0.25)',
      arrowBorderColorDisabled: 'rgba(0,0,0,0.1)',
    },
    arrow: {
      borderColor: ltBackgroundColor,
    },
  },
  bookmarks: {
    card: {
      caption: {
        insetBoxShadowColor: 'rgba(235, 235, 235, 1)',
      },
      hover: {
        boxShadowColor: 'rgba(0,0,0,0.2)',
        captionBoxShadowColor: 'rgba(205, 205, 205, 1)',
      },
    },
  },
  scrollbar: {
    thumb: {
      backgroundColor: 'rgba(0,0,0,0.0625)',
      boxShadowColor: 'rgba(0,0,0,0.125)',
      hover: {
        backgroundColor: `rgba(0,0,0,0.125)`,
        boxShadowColor: `rgba(0,0,0,0.25)`,
      },
    },
    button: {
      backgroundColor: `rgba(0,0,0,0.125)`,
      hover: {
        backgroundColor: 'rgba(0,0,0,0.25)',
      },
      arrow: {
        backgroundColor: 'rgba(0,0,0,0.25)',
        hover: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      },
    },
  },
};
export { lightTheme };
