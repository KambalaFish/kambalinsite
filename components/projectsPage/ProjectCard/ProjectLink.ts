import styled from 'styled-components';

const ProjectLink = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  line-height: 1;
  background-image: linear-gradient(
    210deg,
    ${({ theme }) => theme.projectCard.projectLink.backgroundColor} 35%,
    ${({ theme }) => theme.projectCard.projectLink.onHover.backgroundColor} 65%
  );
  background-position: top right;
  background-size: 300% 300%;
  background-origin: border-box;
  background-repeat: no-repeat;
  transition: background-position 0.6s ease-out, color 0.6s ease-out, box-shadow 0.6s ease-out;
  border-radius: 10% / 50%;
  overflow: hidden;
  box-shadow: 0 0 0.25rem 0 rgb(255, 255, 255);
  color: rgb(32, 32, 32);
  font-weight: 800;
  @keyframes leftRightWave {
    0% {
      background-position: bottom left;
      color: rgb(220, 220, 220);
    }
    100% {
      background-position: top right;
      color: rgb(32, 32, 32);
    }
  }
  :hover {
    //color: rgb(0, 0, 0);
    animation: leftRightWave 0.8s linear infinite alternate;
    box-shadow: inset 0 0 0.25rem 0 rgb(0, 0, 0);
    transition: box-shadow 0.4s ease-in;
  }
`;

export { ProjectLink };
