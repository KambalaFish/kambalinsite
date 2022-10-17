import {
  // makeTabWithSetIndex,
  makeTabWithoutSetIndex,
  // TabContentProps,
} from './ProjectCard/TabInterfaces';
import { Container } from '@components';
import { ContentAreaTitle, CardText, cardTab, StyledUl } from './ProjectCard/ContentAreaTypography';

const TusafinderDescription = makeTabWithoutSetIndex(() => (
  <Container width={'100%'} paddingX={'0.5rem'}>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Описание</ContentAreaTitle>
    </Container>
    <Container width={'100%'} justifyContent={'flex-start'} alignItems={'flex-start'}>
      <StyledUl>
        <CardText as={'li'}>Аутентификация</CardText>
        <CardText as={'li'}>
          Создание тусовок. После создания на карте появляется гео-метка
        </CardText>
        <CardText as={'li'}>Управление тусовками</CardText>
        <CardText as={'li'}>
          Поиск тусовок по карте. После нажатия на гео-метку появляется окно с информацией о
          предстоящей тусовке
        </CardText>
        <CardText as={'li'}>Поиск тусовок по тегам</CardText>
        <CardText as={'li'}>Присоединение к тусовкам</CardText>
      </StyledUl>
    </Container>
  </Container>
));

const TusafinderPrehistory = makeTabWithoutSetIndex(() => (
  <Container width={'100%'} paddingX={'0.5rem'}>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Предыстория</ContentAreaTitle>
    </Container>
    <Container width={'100%'} justifyContent={'flex-start'} alignItems={'flex-start'}>
      <CardText>
        {cardTab}Я работал над этим проектом в рамках университетского курса по &quot;коллективной
        разработки программного обеспечения&quot;, в рамках этого курса мы работали командой 20
        человек, разбившись на подкоманды, которые принимали ответственность за фронтенд, бекенд,
        аналитику, ci-cd, тестирование. Я работал в подкоманде фронта. Взаимодействие происходило с
        использованием инструментов Git и Redmine
      </CardText>
    </Container>
  </Container>
));

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

export { TusafinderDescription, TusafinderPrehistory, TusafinderTechnologies };
