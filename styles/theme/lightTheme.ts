import { DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';

const ltBackgroundColor = 'rgb(245,245,245)';
const moonGray = 'rgb(148, 144, 141)';

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
      boxShadowColor: 'rgba(0, 0, 0, 0.8)',
      color: '#000',
    },
  },
  button: {
    primary: {
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
        backgroundColor: `rgba(0, 0, 0, 0.125)`,
        boxShadowColor: `rgba(0, 0, 0, 0.25)`,
      },
    },
    button: {
      backgroundColor: `rgba(0, 0, 0, 0.125)`,
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
  mobileMenu: {
    menuItems: {
      backgroundColor: 'rgba(255, 255, 255, 0.99)',
      styledLi: {
        color: 'rgb(72,72,72)',
        currentColor: 'rgb(2,2,2)',
      },
    },
    burger: {
      backgroundColorItemsVisible: 'rgb(2,2,2)',
      backgroundColorItemsInvisible: moonGray,
    },
    phone: {
      color: moonGray,
    },
  },
  modalWindow: {
    backShadow: {
      backgroundColor: 'rgba(245, 245, 245, 0.75)',
    },
    contentArea: {
      backgroundColor: ltBackgroundColor,
      boxShadow: {
        outSet: {
          color: 'rgb(190, 190, 200)',
          blurRadius: '4rem',
          spreadRadius: '0.125rem',
        },
        inset: {
          color: 'rgb(128,128,128)',
          blurRadius: '0.75rem',
          spreadRadius: '0.0125rem',
        },
      },
    },
    closeButton: {
      backgroundColor: ltBackgroundColor,
      crossColor: 'rgb(128,128,128)',
      boxShadowColor: 'rgb(144,144,144)',
      blurRadius: '0.4rem',
      hover: {
        backgroundColor: 'rgb(255,255,255)',
        crossColor: 'rgb(32,32,32)',
        boxShadowColor: 'rgb(92, 92, 92)',
      },
    },
  },
  contactsModal: {
    hoverTextColor: 'rgb(233, 168, 51)',
  },
  carousel: {
    arrow: { color: 'rgb(32, 32, 32)' },
    indicator: {
      backgroundColor: 'rgb(170,170,170)',
      currentBackgroundColor: 'rgb(8,8,8)',
    },
  },
  projectCard: {
    backgroundColor: '#f4efe8',
    contentAreaGridArea: {
      backgroundColor: '#f8e9e8',
      boxShadowColor: 'rgb(64,64,64)',
      typography: {
        textBold: {
          color: 'rgb(44,44,44)',
        },
        highlightedText: {
          color: 'rgb(0,0,0)',
          hoverColor: '#358e89',
        },
        slightlyHighlightedText: {
          color: 'rgb(32,32,32)',
        },
      },
    },
    tabButtonsGridArea: {
      backgroundColor: 'rgb(200, 211, 221)',
      boxShadowColor: 'rgb(16,32,64)',
      mobileDevice: {
        boxShadowColor: 'rgb(128, 64, 128)',
      },
    },
    projNameGridArea: {
      border: {
        color: 'rgb(32, 32, 32)',
      },
    },
    extraInfoGridArea: {
      backgroundColor: 'rgb(220, 200, 190)',
      boxShadowColor: '#a84e56',
      borderColor: 'rgb(32, 128, 235)',
    },
    projectLink: {
      backgroundColor: '#bd8084',
      onHover: {
        backgroundColor: '#9a0019',
      },
    },
    cardTitle: {
      color: '#1a2631',
    },
    tabButton: {
      backgroundColor: '#6866ae',
      backgroundColorCurrent: '#3a2f81',
      color: 'rgb(200, 211, 221)',
    },
  },
  projectPage: {
    styledLink: {
      color: '#212121',
    },
  },
};
export { lightTheme };
