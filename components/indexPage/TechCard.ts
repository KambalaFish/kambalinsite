import styled from 'styled-components';
import { IconType } from '@react-icons/all-files';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiBabel } from '@react-icons/all-files/si/SiBabel';
import { SiStyledComponents } from '@react-icons/all-files/si/SiStyledComponents';
import { SiEslint } from '@react-icons/all-files/si/SiEslint';
import { SiPrettier } from '@react-icons/all-files/si/SiPrettier';
import { SiNginx } from '@react-icons/all-files/si/SiNginx';
import { ReactQueryIcon } from '@public/ReactQueryIcon';
import { SiWebpack } from '@react-icons/all-files/si/SiWebpack';
import { ViteIcon } from '@public/ViteIcon';
import { ReduxSagaIcon } from '@public/ReduxSagaIcon';
import { FaSass } from '@react-icons/all-files/fa/FaSass';
import { StylelintIcon } from '@public/StylelintIcon';

const TechCard = styled.a`
  transition: 0.4s ease-in-out 0s;
  color: ${({ theme }) => theme.text.color};
  border-radius: 50%;
  :hover {
    box-shadow: 0 0 3.75rem 0.15625rem ${({ theme }) => theme.techCard.hover.boxShadowColor};
    color: ${(props) => props.theme.techCard.hover.color};
  }
`;

const techStack: { Icon: IconType; url: string; title: string }[] = [
  {
    Icon: ViteIcon,
    url: `https://vitejs.dev/`,
    title: 'Vite',
  },
  {
    Icon: SiWebpack,
    url: `https://webpack.js.org/`,
    title: 'Webpack',
  },
  {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
    title: 'typescript',
  },
  {
    Icon: SiNextDotJs,
    url: 'https://nextjs.org/',
    title: 'next.js',
  },
  {
    Icon: SiReact,
    url: 'https://reactjs.org/',
    title: 'react.js',
  },
  {
    Icon: ReactQueryIcon,
    url: 'https://tanstack.com/query/v3',
    title: 'react-query',
  },
  {
    Icon: SiRedux,
    url: 'https://redux.js.org/',
    title: 'redux',
  },
  {
    Icon: ReduxSagaIcon,
    url: 'https://redux-saga.js.org/',
    title: 'redux-saga',
  },
  {
    Icon: SiStyledComponents,
    url: 'https://styled-components.com/',
    title: 'styled-components',
  },
  {
    Icon: FaSass,
    url: 'https://sass-scss.ru/',
    title: 'Sass',
  },
  {
    Icon: SiEslint,
    url: 'https://eslint.org/',
    title: 'eslint',
  },
  {
    Icon: StylelintIcon,
    url: 'https://stylelint.io/',
    title: 'stylelint',
  },
  {
    Icon: SiBabel,
    url: 'https://babeljs.io/',
    title: 'babel',
  },
  {
    Icon: SiPrettier,
    url: 'https://prettier.io/',
    title: 'prettier',
  },
  {
    Icon: SiNginx,
    url: 'https://docs.nginx.com/',
    title: 'nginx',
  },
];

export { TechCard, techStack };
