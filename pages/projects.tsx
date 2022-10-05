import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, ModalWindow, Text, Title } from '@components';
import styled from 'styled-components';
import Image from 'next/future/image';
import zavod from '/public/projects/zavod2.png';
import React, { useState } from 'react';

const StyledLink = styled.a`
  color: aqua;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  display: inline-block;
  transition: transform 0.3s linear;
  opacity: 0.7;
  &:hover {
    transform: translateY(-0.05rem);
    opacity: 1;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  }
  :hover::after {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease-out, visibility ease-out 0.4s;
  }
  ::after {
    position: absolute;
    content: '';
    top: 1.75rem;
    left: 0;
    right: 0;
    height: 0.125rem;
    border-radius: 25%;
    background-color: ${({ theme }) => theme.fontColor};

    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear, visibility 0.3s;
  }
`;

const zavodModalChildren = () => {
  return (
    <Image
      src={zavod}
      quality={100}
      css={`
        object-fit: contain;
        width: 100%;
        height: auto;
        //border-radius: 5%;
      `}
    />
  );
};

const Projects: NextPage = () => {
  const [isModalOpen, setModalVisibility] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<React.ReactElement>(<></>);

  return (
    <>
      <Head>
        <title>Проекты</title>
      </Head>
      <Container
        minHeight={
          // 'calc(100vh - 2rem - 3rem - 1rem - 0.625rem*2 - calc(0.3125vw + 10px)*1.2 - 3rem - 6.25rem)'
          '100vh'
        }
        maxWidth={'100%'}
      >
        <Container>
          <Title>Проекты</Title>
          <Text width={['30ch', '40ch', 'auto']}>
            Я всегда работаю над новыми проектами. Вы можете найти их на моём{' '}
            <StyledLink href={'https://github.com/KambalaFish/'} target={'_blank'} rel={'external'}>
              Github
            </StyledLink>
            .
          </Text>
        </Container>
        <Container width={'30rem'}>
          <Image
            src={zavod}
            quality={100}
            alt={'zavod'}
            css={`
              object-fit: cover;
              width: 100%;
              height: calc(30rem / 16 * 11);
              border-radius: 5%;
              cursor: pointer;
              :hover {
                scale: 1.01;
                transition: scale 0.4s linear;
              }
              transition: scale 0.4s linear;
            `}
            onClick={() => {
              setModalVisibility(true);
              setModalChildren(zavodModalChildren);
            }}
          />
        </Container>
        <ModalWindow
          isVisible={isModalOpen}
          setModalVisibility={setModalVisibility}
          contentAreaWidth={['100%', '100%', '95%', '80%']}
        >
          {modalChildren}
        </ModalWindow>
      </Container>
    </>
  );
};

export default Projects;
