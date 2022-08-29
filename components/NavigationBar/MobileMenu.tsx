import { Burger, Container } from '@components';
import React from 'react';
import { ThemeToggleProp } from '../Layout';

const MobileMenu = ({ themeToggle }: ThemeToggleProp): React.ReactElement => {
  return (
    <Container
      display={['flex', 'none']}
      position={'fixed'}
      right={'1ch'}
      top={'3ch'}
      zIndex={'1'}
      rowGap={'1.5rem'}
    >
      <Burger />
      {themeToggle}
    </Container>
  );
};

export { MobileMenu };
