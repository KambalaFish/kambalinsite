import {} from 'styled-components/cssprop';
import 'styled-components';

type RGB = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;
type RGBA =
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `rgba(${number},${number},${number},${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

interface IColor {
  color: Color;
}

interface IBackgroundColor {
  backgroundColor: Color;
}
interface IColorAndBackgroundColor extends IColor, IBackgroundColor {}

interface IBoxShadowColor {
  boxShadowColor: Color;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: Color;
    fontColor: Color;
    breakpoints: string[];
    colors: { [string]: Color };
    text: IColor;
    selection: IColorAndBackgroundColor;
    title: {
      selection: IColorAndBackgroundColor;
    };
    styledLink: IColorAndBackgroundColor;
    techCard: {
      hover: IBoxShadowColor & IColor;
    };
    button: {
      primary: {
        hover: IBackgroundColor;
      } & IBackgroundColor;
      secondary: IColorAndBackgroundColor;
    };
    contactsHighlight: {
      boxShadow: {
        insetColor: Color;
        spreadRadius: string;
      } & IColor;
      secondaryButton: IBackgroundColor;
    } & IBackgroundColor;
    pagination: {
      indexPill: {
        backgroundColorCurrent: Color;
        currentColor: Color;
      } & IBackgroundColor &
        Partial<IColor>;
      extremeIndexPill: {
        backgroundColorDisabled: Color;
        arrowBorderColorDisabled: Color;
      } & IBackgroundColor;
      arrow: {
        borderColor: Color;
      };
    };
    bookmarks: {
      card: {
        caption: {
          insetBoxShadowColor: Color;
        };
        hover: {
          captionBoxShadowColor: Color;
        } & IBoxShadowColor;
      };
    };
    scrollbar: {
      thumb: {
        hover: IBackgroundColor & IBoxShadowColor;
      } & IBackgroundColor &
        IBoxShadowColor;
      button: {
        hover: IBackgroundColor;
        arrow: {
          hover: IBackgroundColor;
        } & IBackgroundColor;
      } & IBackgroundColor;
    };
    mobileMenu: {
      menuItems: {
        styledLi: {
          currentColor: Color;
        } & IColor;
      } & IBackgroundColor;
      burger: {
        backgroundColorItemsVisible: Color;
        backgroundColorItemsInvisible: Color;
      };
      phone: IColor;
    };
    modalWindow: {
      backShadow: IBackgroundColor;
      contentArea: {
        boxShadow: {
          outSet: {
            blurRadius: string;
            spreadRadius: string;
          } & IColor;
          inset: {
            blurRadius: string;
            spreadRadius: string;
          } & IColor;
        };
      } & IBackgroundColor;
      closeButton: {
        crossColor: Color;
        blurRadius: string;
        hover: {
          crossColor: Color;
        } & IBackgroundColor &
          IBoxShadowColor;
      } & IBackgroundColor &
        IBoxShadowColor;
    };
    contactsModal: {
      hoverTextColor: Color;
    };
    carousel: {
      arrow: IColor;
    };
  }
}
