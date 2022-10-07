import styled from 'styled-components';

const Indicator = styled.button<{ isCurrent: boolean }>`
  border: 0;
  background-color: ${({ isCurrent }) =>
    isCurrent ? `rgba(255, 255, 255, 1)` : `rgba(255, 255, 255, 0.25)`};
  padding: 0;
  margin: 0;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.25s ease-out;
`;

export { Indicator };
