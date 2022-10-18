import { Container, Text } from './index';
import React from 'react';
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow';
import styled from 'styled-components';

const FooterLink = styled.a`
  transition: transform 0.3s ease-out;
  :hover {
    transform: scale(1.05) translateY(-10%);
    transition: transform 0.25s ease-out;
  }
`;

const Footer = (): React.ReactElement => {
  return (
    <Container as={'footer'} margin={'2.5rem 0'} justifyContent={'center'} rowGap={'0.5rem'}>
      <Container
        flexDirection={'row'}
        justifyContent={'center'}
        width={'max-content'}
        columnGap={'0.75rem'}
      >
        <FooterLink
          href='https://www.linkedin.com/in/dmitry-kambalin/'
          target={'_blank'}
          rel='noreferrer'
        >
          <SiLinkedin size={'2rem'} color={'rgb(0, 119, 181)'} />
        </FooterLink>
        <FooterLink href='https://github.com/KambalaFish/' target={'_blank'} rel='noreferrer'>
          <SiGithub size={'2rem'} />
        </FooterLink>
        <FooterLink
          href='https://stackoverflow.com/users/13500204/dima-kambalin'
          target={'_blank'}
          rel={'noreferrer'}
        >
          <FaStackOverflow size={'2rem'} color={'rgb(244,128,36)'} />
        </FooterLink>
      </Container>
      <Text margin={0} fontSize={'0.9rem'}>
        © {new Date().getFullYear()} Дмитрий Камбалин
      </Text>
    </Container>
  );
};

export default Footer;
