import React from 'react';
import { Burger } from './Burger';
import { Container } from '@components';
import { ThemeToggleProp } from '../../Layout';
import { MenuItemsState } from './MobileMenu';

interface SideMenuProps extends ThemeToggleProp, MenuItemsState {}

const SideMenu = ({
  themeToggle,
  areItemsVisible,
  setItemsVisibility,
}: SideMenuProps): React.ReactElement => {
  return (
    <Container
      display={['flex', 'flex', 'none']}
      position={'fixed'}
      right={'0.5rem'}
      top={'2rem'}
      zIndex={'2'}
      rowGap={'1.5rem'}
    >
      <Burger areItemsVisible={areItemsVisible} setItemsVisibility={setItemsVisibility} />
      {!areItemsVisible && themeToggle}
    </Container>
  );
};

export { SideMenu };
