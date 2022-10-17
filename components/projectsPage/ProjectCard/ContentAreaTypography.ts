import styled from 'styled-components';
import { Text, Title } from '@components';
import { minDeviceMedia } from '@styles/theme';

const ContentAreaTitle = styled(Title)`
  font-size: 1.75rem;
  margin: 0.5rem 0 0.25rem;
  ${minDeviceMedia.mobile} {
    font-size: 2rem;
  }
  ${minDeviceMedia.tablet} {
    font-size: 2.5rem;
    margin: 0.75rem 0 0.5rem;
  }
`;

const TextBold = styled(Text)`
  display: inline;
  font-weight: 800;
  color: rgb(245, 245, 245);
`;

const TextStress = styled(TextBold)`
  text-decoration: underline dashed;
  text-underline-offset: 0.45rem;
  text-decoration-thickness: 0.075rem;
`;

const CardText = styled(Text)`
  text-align: center;
  white-space: normal;
  margin: 0 0 0.5rem;
  ${minDeviceMedia.tablet} {
    text-align: left;
    white-space: pre-wrap;
  }
`;

const HighlightedText = styled(TextBold)`
  cursor: pointer;
  color: rgb(255, 255, 255);
  transition: color 0.3s ease-in;
  :hover {
    color: rgb(32, 180, 220);
    transition: color 0.3s ease-in;
  }
`;

const SlightlyHighlightedText = styled(HighlightedText)`
  color: rgb(230, 230, 230);
`;

const cardTab = '    ';

const StyledUl = styled.ul`
  margin: 0;
  list-style-type: circle;
`;

export {
  ContentAreaTitle,
  TextBold,
  TextStress,
  CardText,
  cardTab,
  StyledUl,
  HighlightedText,
  SlightlyHighlightedText,
};
