import Container from '../Container';
import React from 'react';
import { IconType } from '@react-icons/all-files';
import Text from '../Text';
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram';
import styled, { css } from 'styled-components';
import { minDeviceMedia } from '@styles/theme';
import { IoIosMail } from '@react-icons/all-files/io/IoIosMail';
import { SiSkype } from '@react-icons/all-files/si/SiSkype';

interface ContactProps {
  icon: IconType;
  title: string;
  url: string;
}

const iconSize = css`
  --icon-size: 2.5rem;
  ${minDeviceMedia.mobile} {
    --icon-size: 3rem;
  }
  ${minDeviceMedia.tablet} {
    --icon-size: 4rem;
  }
  ${minDeviceMedia.laptop} {
    --icon-size: 6rem;
  }
  width: var(--icon-size);
  height: var(--icon-size);
`;

const TelegramIcon = styled(FaTelegram)`
  color: rgb(70, 120, 255);
  ${iconSize}
`;

const MailIcon = styled(IoIosMail)`
  color: rgb(255, 120, 70);
  ${iconSize}
`;

const SkypeIcon = styled(SiSkype)`
  color: rgb(50, 192, 255);
  ${iconSize}
`;

const contacts: ContactProps[] = [
  {
    icon: TelegramIcon,
    title: '@dmitrykambalin',
    url: 'https://t.me/dmitrykambalin',
  },
  {
    icon: MailIcon,
    title: 'kambalindmitri@gmail.com',
    url: 'mailto:kambalindmitri@gmail.com',
  },
  {
    icon: SkypeIcon,
    title: 'kambalindmitri@gmail.com',
    url: 'https://join.skype.com/invite/MYn4eTRmqgzS',
  },
];

const ContactText = styled(Text)`
  font-weight: 300;
  transition: color 0.35s cubic-bezier(0, 0.47, 0.18, 0.99) 0s;
  position: relative;
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 105%;
    height: 0.2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.text.color};
    transform: scale(0, 1);
    transform-origin: left;
    transition: background-color 0.35s ease-out 0s, transform 0.35s ease-out 0s;
  }
`;

const ContactContainer = styled(Container)`
  flex-direction: row;
  --hover-text: ${({ theme }) => theme.contactsModal.hoverTextColor};
  :hover ${ContactText} {
    color: var(--hover-text);
    transition: color 0.5s linear 0s;
  }
  :hover ${ContactText}::before {
    transform-origin: left;
    transform: scale(1, 1);
    transition: background-color 0.5s linear, transform 0.5s linear;
    background-color: var(--hover-text);
  }
`;

const Contact = ({ icon: Icon, title, url }: ContactProps) => {
  return (
    <ContactContainer as={'a'} href={url} target={'_blank'} columnGap={'1rem'}>
      <Icon />
      <ContactText
        fontSize={['1.3rem', '1.75rem', '2rem', '3rem']}
        lineHeight={['2.5rem', '3rem', '4rem', '6rem']}
        m={0}
      >
        {title}
      </ContactText>
    </ContactContainer>
  );
};

const Contacts = () => {
  return (
    <Container alignItems={'flex-start'} rowGap={'1rem'}>
      {contacts.map((contact) => (
        <Contact key={contact.url} {...contact} />
      ))}
    </Container>
  );
};
export { Contacts };
