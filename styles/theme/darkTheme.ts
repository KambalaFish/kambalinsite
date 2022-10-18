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
      boxShadowColor: 'rgba(255, 255, 255, 0.8)',
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
  mobileMenu: {
    menuItems: {
      backgroundColor: 'rgba(16,4,16,0.99)',
      styledLi: {
        color: 'rgb(0, 99, 58)',
        currentColor: 'rgb(61, 193, 138)',
      },
    },
    burger: {
      backgroundColorItemsVisible: 'rgb(61, 193, 138)',
      backgroundColorItemsInvisible: 'rgb(255, 255, 255)',
    },
    phone: {
      color: '#00b979',
    },
  },
  modalWindow: {
    backShadow: {
      backgroundColor: 'rgba(18,18,18, 0.925)',
    },
    contentArea: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
      boxShadow: {
        outSet: {
          color: 'rgb(16,16,16)',
          blurRadius: '4rem',
          spreadRadius: '1rem',
        },
        inset: {
          color: 'rgb(32,32,32)',
          blurRadius: '1.5rem',
          spreadRadius: '0.5rem',
        },
      },
    },
    closeButton: {
      backgroundColor: 'rgb(185, 0, 0)',
      crossColor: 'rgb(168, 168, 168)',
      boxShadowColor: 'rgb(168, 168, 168)',
      blurRadius: '0.2rem',
      hover: {
        backgroundColor: 'rgb(255, 0, 0)',
        crossColor: 'rgb(255, 255, 255)',
        boxShadowColor: 'rgb(255, 255, 255)',
      },
    },
  },
  contactsModal: {
    hoverTextColor: 'rgb(60, 255, 179)',
  },
  carousel: {
    arrow: { color: 'rgb(235, 235, 235)' },
    indicator: {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      currentBackgroundColor: 'rgba(255, 255, 255, 1)',
    },
  },
  projectCard: {
    backgroundColor: 'rgb(0, 0, 0)',
    tabButtonsGridArea: {
      backgroundColor: 'rgb(4, 4, 4)',
      boxShadowColor: 'rgb(255, 125, 125)',
      mobileDevice: {
        boxShadowColor: 'rgb(235, 128, 32)',
      },
    },
    projNameGridArea: {
      border: {
        color: 'rgb(235, 128, 32)',
      },
    },
    contentAreaGridArea: {
      backgroundColor: 'rgb(0, 0, 64)',
      boxShadowColor: 'rgb(255, 192, 32)',
      typography: {
        textBold: {
          color: 'rgb(245, 245, 245)',
        },
        highlightedText: {
          color: 'rgb(255, 255, 255)',
          hoverColor: 'rgb(32, 180, 220)',
        },
        slightlyHighlightedText: {
          color: 'rgb(230, 230, 230)',
        },
      },
    },
    extraInfoGridArea: {
      backgroundColor: 'rgba(235, 128, 32, 0.05)',
      boxShadowColor: 'rgb(235, 128, 32)',
      borderColor: 'rgb(235, 128, 32)',
    },
    cardTitle: {
      color: 'rgb(235, 128, 32)',
    },
    tabButton: {
      backgroundColor: 'rgb(105, 10, 10)',
      color: 'rgb(250, 235, 215)',
      backgroundColorCurrent: 'rgb(255, 10, 50)',
    },
    projectLink: {
      backgroundColor: 'rgb(250, 128, 114)',
      onHover: {
        // backgroundColor: 'rgb(173, 216, 230)',
        backgroundColor: 'rgb(255, 32, 64)',
      },
    },
  },
  projectPage: {
    styledLink: {
      color: 'rgb(0, 255, 255)',
    },
  },
};

export { darkTheme };
