import React from 'react';
import { Burger } from './Burger';
import { Container } from '@components';
import { ThemeToggleProp } from '../../Layout';
import { MenuItemsState } from './MobileMenu';
import { FiPhoneIncoming } from '@react-icons/all-files/fi/FiPhoneIncoming';
import styled from 'styled-components';
import Link from 'next/link';

interface SideMenuProps extends ThemeToggleProp, MenuItemsState {}

const StyledPhone = styled(FiPhoneIncoming)`
  color: ${({ theme }) => theme.mobileMenu.phone.color};
  width: 2.4em;
  height: 2.4em;
`;

const SideMenu = ({
  themeToggle,
  areItemsVisible,
  setItemsVisibility,
}: SideMenuProps): React.ReactElement => {
  const menuButtons: React.ReactNode = !areItemsVisible && (
    <>
      {themeToggle}
      <Link href={'/#contacts'}>
        <StyledPhone />
      </Link>
    </>
  );
  return (
    <Container
      display={['flex', 'flex', 'none']}
      position={'fixed'}
      right={'0.75rem'}
      top={'2rem'}
      zIndex={'2'}
      rowGap={'1.5rem'}
    >
      <Burger areItemsVisible={areItemsVisible} setItemsVisibility={setItemsVisibility} />
      {menuButtons}
    </Container>
  );
};

export { SideMenu };
