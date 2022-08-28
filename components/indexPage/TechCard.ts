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

const TechCard = styled.a`
  transition: 0.4s ease-in-out 0s;
  color: ${({ theme }) => theme.text.color};
  border-radius: 50%;
  :hover {
    box-shadow: 0 0 3.75rem 0.15625rem ${({ theme }) => theme.techCard.hover.shadowColor};
    color: ${(props) => props.theme.techCard.hover.color};
  }
`;

const techStack: { Icon: IconType; url: string; title: string }[] = [
  {
    Icon: SiTypescript,
    url: 'https://www.typescriptlang.org/',
    title: 'typescript',
  },
  {
    Icon: SiReact,
    url: 'https://reactjs.org/',
    title: 'react.js',
  },
  {
    Icon: SiRedux,
    url: 'https://redux.js.org/',
    title: 'redux',
  },
  {
    Icon: SiNextDotJs,
    url: 'https://nextjs.org/',
    title: 'next.js',
  },
  {
    Icon: SiBabel,
    url: 'https://babeljs.io/',
    title: 'babel',
  },
  {
    Icon: SiStyledComponents,
    url: 'https://styled-components.com/',
    title: 'styled-components',
  },
  {
    Icon: SiEslint,
    url: 'https://eslint.org/',
    title: 'eslint',
  },
  {
    Icon: SiPrettier,
    url: 'https://prettier.io/',
    title: 'prettier',
  },
];

export { TechCard, techStack };
