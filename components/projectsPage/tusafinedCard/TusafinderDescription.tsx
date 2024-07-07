import { makeTabWithoutSetIndex } from '@components/projectsPage/projectCard/TabInterfaces';
import { Container } from '@components';
import {
  CardText,
  ContentAreaTitle,
  StyledUl,
} from '@components/projectsPage/projectCard/ContentAreaTypography';

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

export { TusafinderDescription };
