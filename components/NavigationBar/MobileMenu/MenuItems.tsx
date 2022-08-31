import React from 'react';
import styled from 'styled-components';
import { Container } from '@components';
import Link from 'next/link';
import { MenuItemsState } from './MobileMenu';
import { ItemsVisibility } from './MobileMenu';

const StyledMenuItems = styled(Container)<ItemsVisibility>`
  position: fixed;
  top: 0;
  left: ${({ areItemsVisible }) => (areItemsVisible ? '0' : '-100%')};
  height: 100%;
  width: 100%;
  opacity: 0.99;
  z-index: 1;
  background-color: ${({ theme }) => theme.mobileMenuItems.backgroundColor};
  justify-content: center;
  transition: left 0.5s ease-in-out;
  overflow-y: auto;
`;

interface StyledLiProps {
  isCurrent: boolean;
}

const StyledLi = styled.li<StyledLiProps>`
  --font-size: 3.5rem;
  font-size: var(--font-size);
  text-decoration: none;
  position: relative;
  color: ${({ isCurrent, theme }) => (isCurrent ? theme.backgroundColor : 'inherit')};

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: calc(var(--font-size) / 2 - 10px / 2);
    display: ${({ isCurrent }) => (isCurrent ? 'block' : 'none')};
    border-style: solid;
  }
  ::before {
    border-color: transparent transparent transparent ${({ theme }) => theme.backgroundColor};
    border-width: 10px 0 10px 20px;
    left: -2rem;
  }
  ::after {
    border-color: transparent ${({ theme }) => theme.backgroundColor} transparent transparent;
    border-width: 10px 20px 10px 0;
    right: -2rem;
  }
`;

import { Links } from '../Links';

const MenuItems = ({ areItemsVisible, setItemsVisibility }: MenuItemsState): React.ReactElement => {
  return (
    <StyledMenuItems areItemsVisible={areItemsVisible} display={['flex', 'flex', 'none']}>
      <Container
        as={'ul'}
        m={0}
        p={0}
        alignItems={'flex-start'}
        rowGap={'2.5rem'}
        css={`
          list-style-type: none;
        `}
      >
        <Links
          render={(href, pageName, isCurrent) => (
            <StyledLi
              isCurrent={isCurrent}
              key={pageName}
              onClick={() => setItemsVisibility((state) => !state)}
            >
              <Link href={href}>{pageName}</Link>
            </StyledLi>
          )}
        />
      </Container>
    </StyledMenuItems>
  );
};
export { MenuItems };