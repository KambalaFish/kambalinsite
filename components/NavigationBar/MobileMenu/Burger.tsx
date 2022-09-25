import React from 'react';
import styled from 'styled-components';
import { ItemsVisibility, MenuItemsState } from './MobileMenu';

const StyledBurger = styled.div<ItemsVisibility>`
  width: 2.4rem;
  height: 2rem;
  cursor: pointer;
  position: relative;
  &::before,
  &::after,
  & span {
    left: 0;
    position: absolute;
    height: 0.4rem;
    width: 2.4rem;
    transition: all 0.5s ease-in-out;
    background-color: ${({ theme, areItemsVisible }) =>
      areItemsVisible
        ? theme.mobileMenu.burger.backgroundColorItemsVisible
        : theme.mobileMenu.burger.backgroundColorItemsInvisible};
  }
  &::before,
  &::after {
    content: '';
  }
  &::before {
    top: ${({ areItemsVisible }) => (areItemsVisible ? '1rem' : '0')};
    transform: ${({ areItemsVisible }) => areItemsVisible && 'rotate(-45deg)'};
  }
  &::after {
    top: ${({ areItemsVisible }) => (areItemsVisible ? '1rem' : '1.6rem')};
    transform: ${({ areItemsVisible }) => areItemsVisible && 'rotate(45deg)'};
  }
  & span {
    top: 0.8rem;
    transform: ${({ areItemsVisible }) => (areItemsVisible ? 'scale(0)' : 'scale(1)')};
  }
`;

const Burger = ({ areItemsVisible, setItemsVisibility }: MenuItemsState): React.ReactElement => {
  return (
    <StyledBurger
      areItemsVisible={areItemsVisible}
      onClick={() => setItemsVisibility((state) => !state)}
    >
      <span></span>
    </StyledBurger>
  );
};
export { Burger };
