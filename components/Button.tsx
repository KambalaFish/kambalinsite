import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  line-height: 1.25;
  font-weight: bold;
  padding: 1.125rem 3.125rem;
  border-radius: 0.75rem;
  cursor: pointer;
  border: none;
  color: #fff;
  text-align: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.button.primary.backgroundColor};
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover.backgroundColor};
  }
`;

const SecondaryButton = styled(Button)`
  color: ${({ theme }) => theme.button.secondary.color};
  background-color: ${({ theme }) => theme.button.secondary.backgroundColor};
  &:hover {
    background-color: inherit;
  }
`;

export { PrimaryButton, SecondaryButton };
