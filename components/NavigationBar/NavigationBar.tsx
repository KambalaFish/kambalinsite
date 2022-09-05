import React from 'react';
import { NonMobileMenu } from './NonMobileMenu/NonMobileMenu';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { ThemeToggleProp } from '../Layout';

const NavigationBar = React.memo(function NavigationBar({
  themeToggle,
}: ThemeToggleProp): React.ReactElement {
  return (
    <nav>
      <MobileMenu themeToggle={themeToggle} />
      <NonMobileMenu themeToggle={themeToggle} />
    </nav>
  );
});

export default NavigationBar;
