import { Container } from '@components';
import { ContentAreaTitle } from './ContentAreaTitle';

const ZavodDescription = (
  <Container width={'100%'}>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Описание</ContentAreaTitle>
    </Container>
  </Container>
);

const ZavodPrehistory = (
  <Container width={'100%'}>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Предыстория</ContentAreaTitle>
    </Container>
  </Container>
);

const ZavodTechnologies = (
  <Container>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Технологии</ContentAreaTitle>
    </Container>
  </Container>
);

export { ZavodDescription, ZavodPrehistory, ZavodTechnologies };
