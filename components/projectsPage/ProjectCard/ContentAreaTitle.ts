import styled from 'styled-components';
import { Title } from '@components';
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

export { ContentAreaTitle };
