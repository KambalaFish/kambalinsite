import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.projectPage.styledLink.color};
  text-decoration: none;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  display: inline-block;
  transition: transform 0.3s linear;
  opacity: 0.7;
  &:hover {
    transform: translateY(-0.05rem);
    opacity: 1;
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  }
  :hover::after {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease-out, visibility ease-out 0.4s;
  }
  ::after {
    position: absolute;
    content: '';
    top: 1.75rem;
    left: 0;
    right: 0;
    height: 0.125rem;
    border-radius: 25%;
    background-color: ${({ theme }) => theme.fontColor};

    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear, visibility 0.3s;
  }
`;

export { StyledLink };
