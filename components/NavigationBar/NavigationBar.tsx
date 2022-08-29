import React from 'react';
import { NonMobileMenu } from './NonMobileMenu';
import { MobileMenu } from './MobileMenu';
import { ThemeToggleProp } from '../Layout';

const NavigationBar = ({ themeToggle }: ThemeToggleProp): React.ReactElement => (
  <nav>
    <MobileMenu themeToggle={themeToggle} />
    <NonMobileMenu themeToggle={themeToggle} />
  </nav>
);

export default NavigationBar;
