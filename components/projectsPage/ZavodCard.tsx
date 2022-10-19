import { Container } from '@components';
import {
  ContentAreaTitle,
  TextStress,
  CardText,
  cardTab,
  TextBold,
  StyledUl,
  HighlightedText,
  SlightlyHighlightedText,
} from './ProjectCard/ContentAreaTypography';
import { TabContentProps } from './ProjectCard/TabInterfaces';
import { makeTabWithSetIndex, makeTabWithoutSetIndex } from './ProjectCard/TabInterfaces';
import { useCallback } from 'react';

const ZavodDescription = makeTabWithSetIndex(
  ({ setCurrentIndex }: TabContentProps): React.ReactElement => {
    // we can be sure in identity of setCurrentIndex as it is a function from useState, so we can omit it from dependency array
    const actionColumnSlide = useCallback(() => setCurrentIndex(5), []);

    return (
      <Container width={'100%'} paddingX={'0.5rem'}>
        <Container flexDirection={'row'} justifyContent={'center'}>
          <ContentAreaTitle>Описание</ContentAreaTitle>
        </Container>
        <Container width={'100%'} alignItems={'flex-start'} justifyContent={'flex-start'}>
          <CardText>
            {cardTab}Чтобы потыкать и посмотреть лично нажмите на кнопку &quot;попробовать&quot;.
          </CardText>
          <CardText>{cardTab}Далее,</CardText>
          <StyledUl>
            <CardText as={'li'}>
              чтобы войти как <TextStress>администратор</TextStress> используйте: <br />
              <TextBold>логин</TextBold>: admin@admin.com и <TextBold>пароль</TextBold>: password{' '}
            </CardText>
            <CardText as={'li'}>
              чтобы войти как <TextStress>администратор компании</TextStress> используйте: <br />{' '}
              <TextBold>логин</TextBold>: company@admin.com и <TextBold>пароль</TextBold>: password.
            </CardText>
          </StyledUl>
          <CardText>{cardTab}Обзор общего функционала:</CardText>
          <StyledUl>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(0)}>Аутентификация.</HighlightedText>{' '}
              Приложение позволяет производить доступ в роли главного администратора, а также в роли
              администратора компании. Сначала происходит запрос для получения CSRF куки. После
              этого совершается post-запрос на ендпоинт логина. Далее в случае неуспешного ответа
              отображается плашка с ответом от бекенда. В случае успешного ответа мы получаем куку,
              с помощью которой в дальнейшем будет происходить аутентификация запросов, а также тело
              ответа, в котором содержится информация о пользователе, который залогинился, эта
              информация сохраняется в Local storage для дальнейшего входа без логина при закрытии и
              открытии вкладки вновь. В зависимости от полученной информации о пользователе будет
              отображаться борда для системного администратора, либо для администратора компании.
              Если пользователь не проявляет активность в течении двух часов, кука для
              аутентификации сгорает, из Local storage удаляется информация о залогинившемся
              пользователе, после этого приложение редиректит пользователя на страницу входа.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(1)}>
                Выход из системы.{' '}
              </HighlightedText>
              Для выхода нужно нажать на кнопку Log out в навигационном меню. После этого происходит
              запрос на бек, там удаляется файл с информацией о пользовательской сессии и создаётся
              новый, чтобы последующие запросы не были аутентифицированы, а также регенируется CSRF
              токен. Далее после успешного ответа от сервера, из Local storage удаляется то тело
              ответа с информацией об залогинившемся пользоателе, которое было получено при
              аутентификации, после чего приложение редиректит пользователя на страницу входа.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(2)}>
                Просмотр профиля.{' '}
              </HighlightedText>
              На странице профиля отображается информация о пользователе, полученная при входе в
              систему.
            </CardText>
          </StyledUl>
          <CardText>{cardTab}Обзор функционала главного администратора:</CardText>
          <StyledUl>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(3)}>
                Получения списка компаний
              </HighlightedText>{' '}
              в виде пагинированной таблицы.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(4)}>
                Фильтрация списка компаний.
              </HighlightedText>{' '}
              Таблицу можно фильтровать по значению любой из колон, в любой комбинации. На{' '}
              <SlightlyHighlightedText onClick={actionColumnSlide}>
                данном слайде
              </SlightlyHighlightedText>{' '}
              представлен результат фильтрации таблицы по значению колоны статуса.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(6)}>
                Обновление компании.{' '}
              </HighlightedText>
              На страницу обновления компании можно попасть после клика на кнопку
              <SlightlyHighlightedText onClick={actionColumnSlide}>
                {' '}
                update{' '}
              </SlightlyHighlightedText>
              в колонке Action на странице созданных компаний. При вводе данных в форму обновления
              компании происходит валидация данных при помощи регулярных выражений. Например, при
              вводе значения, содержащего буквы, в поле телефонного номера, под полем будет
              отображаться сообщение, выделенное красным цветом, о некорректном формате ввода. В
              случае успешной валидации введенных значений, отправляется запрос на бекенд, далее при
              успешном ответе бекенда отображается{' '}
              <SlightlyHighlightedText onClick={() => setCurrentIndex(7)}>
                зеленая плашечка
              </SlightlyHighlightedText>{' '}
              с сообщением о том, что обновление произошло успешно. В случае неуспешного ответа от
              бекенда будет отображаться плашечка красного цвета с сообщением от бекенда о
              неуспешном выполнении запроса
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(8)}>
                Удаление компании.{' '}
              </HighlightedText>
              Для удаления компании достаточно нажать на кнопку{' '}
              <SlightlyHighlightedText onClick={actionColumnSlide}>remove</SlightlyHighlightedText>{' '}
              в поле колонки Action на странице созданных компаний. Далее отправляется запрос на
              бекенд. И в зависимости от ответа всплывает красная или зеленая плашечка с сообщением
              об успешном или безуспешном результате запроса.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(9)}>
                Создание администратора компании.{' '}
              </HighlightedText>
              На страницу создания администратора компании можно попасть после нажатия на кнопку{' '}
              <SlightlyHighlightedText onClick={actionColumnSlide}>
                create admin
              </SlightlyHighlightedText>{' '}
              в поле колонки Action на странице созданных компаний. Аналогично обновлению компании
              (валидация, запрос, ответ).
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(10)}>
                Получение информации о компании.{' '}
              </HighlightedText>
              На страницу с информацией о компании можно попасть после клика на кнопку{' '}
              <SlightlyHighlightedText onClick={actionColumnSlide}>info</SlightlyHighlightedText> в
              поле колонки Action на странице созданных компаний. После клика на кнопку info,
              делается несколько запросов, содержащих id выбранной компании, на бекенд, в результате
              которых подтягивается информация о компании, представленная на скриншоте.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(13)}>
                Создание компании.{' '}
              </HighlightedText>
              На страницу создания компании можно попасть после нажатия на кнопку{' '}
              <SlightlyHighlightedText onClick={() => setCurrentIndex(11)}>
                Create a company{' '}
              </SlightlyHighlightedText>
              в навигационном меню. Аналогично обновлению компании (
              <SlightlyHighlightedText onClick={() => setCurrentIndex(12)}>
                валидация
              </SlightlyHighlightedText>
              , запрос, ответ).
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(15)}>
                Получения списка администраторов компаний{' '}
              </HighlightedText>
              в виде пагинированной таблицы. На данную страницу можно попасть после нажатия на
              кнопку{' '}
              <SlightlyHighlightedText onClick={() => setCurrentIndex(14)}>
                All administrators
              </SlightlyHighlightedText>{' '}
              в навигационном меню.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(15)}>
                Фильтрация списка администраторов.
              </HighlightedText>{' '}
              Таблицу можно фильтровать по значению любой из колон, в любой комбинации. На{' '}
              <SlightlyHighlightedText onClick={() => setCurrentIndex(16)}>
                данном слайде
              </SlightlyHighlightedText>{' '}
              представлен результат фильтрации таблицы по значению колонки названия компании.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(17)}>
                Обновление данных администратора компании.{' '}
              </HighlightedText>
              На страницу обновления администратора компании можно попасть, нажав на кнопку update в
              поле колонки Action на странице со списком администраторов компании. Всё также
              происходят: валидация, запрос, ответ.
            </CardText>
            <CardText as={'li'}>
              <HighlightedText onClick={() => setCurrentIndex(18)}>
                Создание администратора компании.{' '}
              </HighlightedText>
              На данную страницу можно попасть после нажатия на кнопку
              <SlightlyHighlightedText onClick={() => setCurrentIndex(14)}>
                {' '}
                Create administrator{' '}
              </SlightlyHighlightedText>
              в навигационном меню. Валидация, запрос, ответ.
            </CardText>
          </StyledUl>
        </Container>
      </Container>
    );
  }
);

const ZavodPrehistory = makeTabWithoutSetIndex(
  (): React.ReactElement => (
    <Container paddingX={'0.5rem'} width={'100%'}>
      <Container flexDirection={'row'} justifyContent={'center'}>
        <ContentAreaTitle>Предыстория</ContentAreaTitle>
      </Container>
      <Container
        alignItems={['center', 'center', 'flex-start']}
        justifyContent={'flex-start'}
        width={'100%'}
      >
        <CardText>
          {cardTab}Я делал этот проект в рамках дипломной работы. Спойлер: работа не была завершена
          до конца, т.к. я ушёл в академический отпуск, а работа была передана другому человеку.
        </CardText>
        <CardText>
          {cardTab}Суть работы заключалась в том, чтобы создать аналог &quot;джиры&quot; на
          минималках. Подразумевалось, что данная работа позволила бы обслуживать множество
          компаний, и помочь управляющим на предприятиях этих компаний наладить отслеживание рабочих
          процессов в реальном времени.
        </CardText>
        <CardText>
          {cardTab}Планировалось реализовать функционал, который позволил бы создавать работников,
          отводить роли для них, объединять их в команды, отделы. Конечно же, так как это аналог
          джиры нужно было обеспечить возможность создавать подзадачи, задачи и эпики, вешать их на
          рабочих или давать им возможность самим зафиксировать задачу на себя с дальнейшим правом
          изменения статуса задачи. Ну и соответственно в дальнейшем администратор должен был иметь
          возможность отслеживать воркфлоу по задачам.
        </CardText>
        <CardText>
          {cardTab}В общем, планы были грандиозные, но реализовать я успел не так много по этому
          проекту :)
        </CardText>
      </Container>
    </Container>
  )
);

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

export { ZavodDescription, ZavodPrehistory, ZavodTechnologies };
