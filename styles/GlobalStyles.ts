import { createGlobalStyle } from 'styled-components';
import { minDeviceMedia } from '@styles/theme';

const GlobalStyle = createGlobalStyle`
  
  html {
    margin: 0;
    scroll-behavior: smooth;
  }

  /*
    https://stackoverflow.com/a/39289453/13500204
    устранение сдвига из-за появления скролбара
  */
  
  ${minDeviceMedia.mobile}{
    html {
      margin: 0 calc(100% - 100vw) 0 0;
    }
  }
  
  body {
    margin: 0;
  }
  
  html,
  body {
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
    font-size: calc(0.3125vw + 10px);
    //font-size: calc(0.5vw + 8px);
    //font-size: clamp(12px, 0.3125vw + 10px, 22px);
    transition: all 0.25s ease-in-out;
    overflow-x: hidden;
    //overflow-y: scroll;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  
  *::selection {
      color: ${({ theme }) => theme.selection.color};
      background-color: ${({ theme }) => theme.selection.backgroundColor};
    }

  html::-webkit-scrollbar {width: 1.5rem;};
  html::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbar.thumb.backgroundColor};
    box-shadow: inset 0 0 0.75rem 0.25rem ${({ theme }) => theme.scrollbar.thumb.boxShadowColor};
    border-radius: 1.5rem;
  }

  html::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.scrollbar.thumb.hover.backgroundColor};
    box-shadow: inset 0 0 0.75rem 0.25rem ${({ theme }) =>
      theme.scrollbar.thumb.hover.boxShadowColor};
  }

  html::-webkit-scrollbar-button{
    display: block;
    background-color: ${({ theme }) => theme.scrollbar.button.backgroundColor};
    height: 1.5rem;
    border-radius: 25%;
  }

  html::-webkit-scrollbar-button:hover, html::-webkit-scrollbar-button:hover{
    background-color: ${({ theme }) => theme.scrollbar.button.hover.backgroundColor};
  }

  html::-webkit-scrollbar-button:vertical:start:increment{
    display: none;
  }

  html::-webkit-scrollbar-button:vertical:start:decrement {
    border-style: solid;
    border-width: 0 0.75rem 1.5rem 0.75rem;
    border-color: transparent transparent ${({ theme }) =>
      theme.scrollbar.button.arrow.backgroundColor} transparent;
  }
  html::-webkit-scrollbar-button:vertical:start:hover {
    border-color: transparent transparent ${({ theme }) =>
      theme.scrollbar.button.arrow.hover.backgroundColor} transparent;
  }

  html::-webkit-scrollbar-button:vertical:end:increment {
    //background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ee/Chevron-down.svg');
    border-style: solid;
    border-width: 1.5rem 0.75rem 0 0.75rem;
    border-color: ${({ theme }) =>
      theme.scrollbar.button.arrow.backgroundColor} transparent transparent transparent;
  }

  html::-webkit-scrollbar-button:vertical:end:hover{
    border-color: ${({ theme }) =>
      theme.scrollbar.button.arrow.hover.backgroundColor} transparent transparent transparent;
  }

  html::-webkit-scrollbar-button:vertical:end:decrement {
    display: none;
  }
  
`;

export { GlobalStyle };
