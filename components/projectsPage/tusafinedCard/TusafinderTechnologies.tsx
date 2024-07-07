import { makeTabWithoutSetIndex } from '@components/projectsPage/projectCard/TabInterfaces';
import { Container } from '@components';
import {
  CardText,
  ContentAreaTitle,
  StyledUl,
} from '@components/projectsPage/projectCard/ContentAreaTypography';

const TusafinderTechnologies = makeTabWithoutSetIndex(() => (
  <Container width={'100%'} paddingX={'0.5rem'}>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Технологии</ContentAreaTitle>
    </Container>
    <Container width={'100%'} justifyContent={'flex-start'} alignItems={'flex-start'}>
      <StyledUl>
        <CardText as={'li'}>React</CardText>
        <CardText as={'li'}>Typescript</CardText>
        <CardText as={'li'}>React-google-map</CardText>
        <CardText as={'li'}>React-bootstrap</CardText>
        <CardText as={'li'}>Axios</CardText>
        <CardText as={'li'}>EsLint. Prettier</CardText>
      </StyledUl>
    </Container>
  </Container>
));

export { TusafinderTechnologies };
