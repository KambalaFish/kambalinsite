import { makeTabWithoutSetIndex } from '@components/projectsPage/projectCard/TabInterfaces';
import { Container } from '@components';
import {
  cardTab,
  CardText,
  ContentAreaTitle,
  StyledUl,
  TextBold,
} from '../projectCard/ContentAreaTypography';

const ZavodTechnologies = makeTabWithoutSetIndex(
  (): React.ReactElement => (
    <Container width={'100%'} paddingX={'0.5rem'}>
      <Container flexDirection={'row'} justifyContent={'center'}>
        <ContentAreaTitle>Технологии</ContentAreaTitle>
      </Container>
      <Container width={'100%'} alignItems={'flex-start'} justifyContent={'flex-start'}>
        <CardText>{cardTab}Бекенд часть:</CardText>
        <StyledUl>
          <CardText as={'li'}>
            В качестве базы данных используется <TextBold>MySql</TextBold>.
          </CardText>
          <CardText as={'li'}>
            В качестве бекенд сервера, обрабатывающего rest-запросы, используется фреймворк{' '}
            <TextBold>Laravel</TextBold>. База данных заполняется при помощи seeder&apos;a, который
            использует классы фабрик, в которых определяется, какого рода случайные значения должны
            генерироваться для заполнения таблиц базы данных посредством утилиты фейкер.
          </CardText>
        </StyledUl>
        <CardText>{cardTab}Фронтенд часть:</CardText>
        <StyledUl>
          <CardText as={'li'}>React</CardText>
          <CardText as={'li'}>Typescript</CardText>
          <CardText as={'li'}>Material-UI</CardText>
          <CardText as={'li'}>Redux-toolkit</CardText>
          <CardText as={'li'}>Axios</CardText>
          <CardText as={'li'}>React-hook-form. Yup</CardText>
          <CardText as={'li'}>EsLint</CardText>
          <CardText as={'li'}>Babel</CardText>
        </StyledUl>
      </Container>
    </Container>
  )
);

export { ZavodTechnologies };
