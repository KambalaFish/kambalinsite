import styled from 'styled-components';
import { Text } from '@components';
import { minDeviceMedia } from '@styles/theme';

const TextStress = styled(Text)`
  display: inline;
  font-weight: 800;
  text-decoration: underline dashed;
  text-underline-offset: 0.35rem;
  text-decoration-thickness: 0.1rem;
  margin: 0;
`;

const CardText = styled(Text)`
  text-align: center;
  white-space: normal;
  ${minDeviceMedia.tablet} {
    text-align: left;
    white-space: pre-wrap;
  }
`;

const cardTab = '    ';

export { TextStress, CardText, cardTab };
