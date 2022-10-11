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
  background-color: rgb(105, 10, 10);
  color: antiquewhite;
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
  transition: background-color 0.5s ease-out, transform 0.5s ease-out;
  ${({ isCurrent }) => {
    if (isCurrent) {
      return css`
        background-color: rgb(255, 10, 50);
        transform: scale(1.05);
      `;
    }
  }}
`;

export { TabButton };