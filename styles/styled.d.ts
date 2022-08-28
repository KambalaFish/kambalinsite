import {} from 'styled-components/cssprop';
import 'styled-components';

type Colormode = {
  color: string;
  backgroundColor: string;
};
declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    fontColor: string;
    breakpoints: string[];
    colors: { [string]: string };
    text: {
      color: string;
    };
    selection: {
      color: string;
      backgroundColor: string;
    };
    title: {
      selection: {
        color: string;
        backgroundColor: string;
      };
    };
    styledLink: {
      color: string;
      backgroundColor: string;
    };
    techCard: {
      hover: {
        shadowColor: string;
        color: string;
      };
    };
    button: {
      primary: {
        backgroundColor: string;
        hover: {
          backgroundColor: string;
        };
      };
      secondary: {
        color: string;
        backgroundColor: string;
      };
    };
    contactsHighlight: {
      backgroundColor: string;
      boxShadow: {
        color: string;
        insetColor: string;
        spreadRadius: string;
      };
      secondaryButton: {
        backgroundColor: string;
      };
    };
    pagination: {
      indexPill: {
        backgroundColorCurrent: string;
        backgroundColor: string;
        currentColor: string;
        color?: string;
      };
      extremeIndexPill: {
        backgroundColorDisabled: string;
        backgroundColor: string;
        arrowBorderColorDisabled: string;
      };
      arrow: {
        borderColor: string;
      };
    };
    bookmarks: {
      card: {
        caption: {
          insetBoxShadowColor: string;
        };
        hover: {
          boxShadowColor: string;
          captionBoxShadowColor: string;
        };
      };
    };
    scrollbar: {
      thumb: {
        backgroundColor: string;
        boxShadowColor: string;
        hover: {
          backgroundColor: string;
          boxShadowColor: string;
        };
      };
      button: {
        backgroundColor: string;
        hover: {
          backgroundColor: string;
        };
        arrow: {
          backgroundColor: string;
          hover: {
            backgroundColor: string;
          };
        };
      };
    };
  }
}
