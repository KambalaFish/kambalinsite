import { makeTabWithoutSetIndex } from '@components/projectsPage/projectCard/TabInterfaces';
import { Container } from '@components';
import {
  cardTab,
  CardText,
  ContentAreaTitle,
  StyledUl,
} from '@components/projectsPage/projectCard/ContentAreaTypography';
import { StyledLink } from '@components/projectsPage/StyledLink';

const VitrinaTechnologies = makeTabWithoutSetIndex(() => {
  return (
    <Container width={`100%`} paddingX={`0.5rem`}>
      <Container flexDirection={`row`} justifyContent={`center`}>
        <ContentAreaTitle>Технологии</ContentAreaTitle>
      </Container>
      <Container width={`100%`} alignItems={`flex-start`} justifyContent={`flex-start`}>
        <CardText>{cardTab}Фронтенд часть: </CardText>
        <StyledUl>
          <CardText as={`li`}>
            Сборщик:{' '}
            <StyledLink href={`https://vitejs.dev/`} target={`_blank`}>
              Vite
            </StyledLink>
          </CardText>
          <CardText as={`li`}>
            Типизация:{' '}
            <StyledLink href={`https://www.typescriptlang.org/`} target={`_blank`}>
              Typescript
            </StyledLink>
          </CardText>
          <CardText as={`li`}>
            Основная библиотека:{' '}
            <StyledLink href={`https://react.dev/`} target={`_blank`}>
              React
            </StyledLink>
          </CardText>
          <CardText as={`li`}>
            Глобальный стейт менеджмент:{' '}
            <StyledLink href={`https://redux-toolkit.js.org/`} target={`_blank`}>
              redux-toolkit
            </StyledLink>{' '}
            +{' '}
            <StyledLink href={`https://ru.redux-saga.js.org/`} target={`_blank`}>
              redux-saga
            </StyledLink>
          </CardText>
          <CardText as={`li`}>
            Стили:{' '}
            <StyledLink href={`https://sass-scss.ru/`} target={`_blank`}>
              SCSS
            </StyledLink>{' '}
            +{' '}
            <StyledLink href={`https://vitejs.dev/guide/features#css-modules`} target={`_blank`}>
              CSS Modules
            </StyledLink>{' '}
            +{' '}
            <StyledLink href={`https://www.npmjs.com/package/classnames`} target={`_blank`}>
              classnames
            </StyledLink>
          </CardText>
          <CardText as={`li`}>
            Работа с удалёнными данными:{' '}
            <StyledLink href={`https://tanstack.com/query/latest`} target={`_blank`}>
              tanstack react-query
            </StyledLink>{' '}
            +{' '}
            <StyledLink href={`https://axios-http.com/`} target={`_blank`}>
              axios
            </StyledLink>
          </CardText>
          <CardText as={`li`}>
            Валидация форм:{' '}
            <StyledLink href={`https://react-hook-form.com/`} target={`_blank`}>
              reach-hook-form
            </StyledLink>{' '}
            +{' '}
            <StyledLink href={`https://github.com/jquense/yup`} target={`_blank`}>
              yup
            </StyledLink>
          </CardText>
          <CardText as={`li`}>
            Виртуализация:{' '}
            <StyledLink href={`https://tanstack.com/virtual/latest`} target={`_blank`}>
              tanstack react-virtual
            </StyledLink>{' '}
          </CardText>
          <CardText as={`li`}>
            Линтеры:{' '}
            <StyledLink href={`https://eslint.org/`} target={`_blank`}>
              EsLint
            </StyledLink>
            ,{' '}
            <StyledLink href={`https://stylelint.io/`} target={`_blank`}>
              Stylelint
            </StyledLink>
            ,{' '}
            <StyledLink href={`https://prettier.io/`} target={`_blank`}>
              Prettier
            </StyledLink>
            ,{' '}
            <StyledLink href={`https://github.com/lint-staged/lint-staged`} target={`_blank`}>
              lint-staged
            </StyledLink>
          </CardText>
          <CardText as={`li`}>
            Карта:{' '}
            <StyledLink href={`https://pbe-react-yandex-maps.vercel.app/`} target={`_blank`}>
              react-yandex-maps
            </StyledLink>
          </CardText>
        </StyledUl>
        <CardText>{cardTab}Бекенд часть:</CardText>
        <StyledUl>
          <CardText as={`li`}>
            В качестве базы данных используется{' '}
            <StyledLink href={`https://www.mongodb.com/`} target={`_blank`}>
              Mongodb
            </StyledLink>
            , т.к. документоориентированная система хороша подходит для описание данных товаров, у
            которых поля могут произвольно изменятся в зависимости от категории.
          </CardText>
          <CardText as={`li`}>
            В качестве сервера для обработки REST-запросов используется фреймворк{' '}
            <StyledLink href={`https://expressjs.com/`} target={`_blank`}>
              Express.js
            </StyledLink>
          </CardText>
        </StyledUl>
      </Container>
    </Container>
  );
});

export { VitrinaTechnologies };
