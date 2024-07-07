import { makeTabWithoutSetIndex } from '@components/projectsPage/projectCard/TabInterfaces';
import { Container } from '@components';
import {
  cardTab,
  CardText,
  ContentAreaTitle,
} from '@components/projectsPage/projectCard/ContentAreaTypography';

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

export { TusafinderPrehistory };
