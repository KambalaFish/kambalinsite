import React, { useEffect, useState } from 'react';
import { ThemeToggleProp } from '../../Layout';
import { MenuItems } from './MenuItems';
import { SideMenu } from './SideMenu';

export interface ItemsVisibility {
  areItemsVisible: boolean;
}
export interface ItemsVisibilityToggle {
  setItemsVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuItemsState extends ItemsVisibility, ItemsVisibilityToggle {}

const MobileMenu = ({ themeToggle }: ThemeToggleProp): React.ReactElement => {
  const [areMenuItemsVisible, setMenuItemsVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (areMenuItemsVisible) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }
  }, [areMenuItemsVisible]);

  return (
    <>
      <SideMenu
        themeToggle={themeToggle}
        areItemsVisible={areMenuItemsVisible}
        setItemsVisibility={setMenuItemsVisibility}
      />
      <MenuItems
        areItemsVisible={areMenuItemsVisible}
        setItemsVisibility={setMenuItemsVisibility}
      />
    </>
  );
};

export { MobileMenu };
