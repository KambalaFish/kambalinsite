import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`
  width: 2rem;
  aspect-ratio: 5 / 4;
  cursor: pointer;
  position: relative;
  &::before,
  &::after,
  & span {
    left: 0;
    position: absolute;
    height: 20%;
    width: 100%;
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.fontColor};
  }
  &::before,
  &::after {
    content: '';
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  & span {
    top: 40%;
    //transform: scale(1);
  }
`;

const Burger = (): React.ReactElement => {
  return (
    <StyledBurger>
      <span></span>
    </StyledBurger>
  );
};
export { Burger };
