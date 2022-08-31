import React from 'react';
import styled from 'styled-components';
import { ItemsVisibility, MenuItemsState } from './MobileMenu';

const StyledBurger = styled.div<ItemsVisibility>`
  width: 2.4rem;
  aspect-ratio: 6 / 5;
  cursor: pointer;
  position: relative;
  &::before,
  &::after,
  & span {
    left: 0;
    position: absolute;
    height: 20%;
    width: 100%;
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
    top: ${({ areItemsVisible }) => (areItemsVisible ? '50%' : '0')};
    transform: ${({ areItemsVisible }) => areItemsVisible && 'rotate(-45deg)'};
  }
  &::after {
    bottom: ${({ areItemsVisible }) => (areItemsVisible ? '30%' : '0')};
    transform: ${({ areItemsVisible }) => areItemsVisible && 'rotate(45deg)'};
  }
  & span {
    top: 40%;
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
