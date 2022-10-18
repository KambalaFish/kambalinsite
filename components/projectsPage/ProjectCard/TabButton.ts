import styled, { css } from 'styled-components';

interface TabButtonProps {
  isCurrent: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  cursor: pointer;
  padding: 0.4rem;
  margin: 0;
  border: 0;
  display: inline-block;
  border-radius: 0.75rem / 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.projectCard.tabButton.backgroundColor};
  color: ${({ theme }) => theme.projectCard.tabButton.color};
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
  transition: background-color 0.5s ease-out, transform 0.5s ease-out, opacity 0.5s ease-out;
  opacity: 0.75;
  :hover {
    opacity: 1;
    transition: opacity 0.4s ease-out;
  }
  ${({ isCurrent }) => {
    if (isCurrent) {
      return css`
        background-color: ${({ theme }) => theme.projectCard.tabButton.backgroundColorCurrent};
        transform: scale(1.05);
        opacity: 1;
      `;
    }
  }}
`;

export { TabButton };
