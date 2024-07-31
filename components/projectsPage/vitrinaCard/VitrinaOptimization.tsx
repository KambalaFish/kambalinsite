import {
  makeTabWithoutImageIndexAndWithTabIndex,
  SetTabIndexProp,
} from '@components/projectsPage/projectCard/TabInterfaces';
import { Container } from '@components';
import {
  ContentAreaTitle,
  CardText,
  StyledUl,
  TextBold,
  TextStress,
} from '@components/projectsPage/projectCard/ContentAreaTypography';
import { StyledLink } from '@components/projectsPage/StyledLink';

const VitrinaOptimization = makeTabWithoutImageIndexAndWithTabIndex(
  ({ setCurrentTab }: SetTabIndexProp) => {
    const onSearchGoodsOptimizationsClick = () => {
      const searchGoodsOptimizations = document.querySelector('#goods-search-optimizations');
      if (searchGoodsOptimizations) {
        setCurrentTab(0);
        searchGoodsOptimizations.scrollIntoView({ block: `start` });
      }
    };

    return (
      <Container width={`100%`} paddingX={`0.5rem`}>
        <Container flexDirection={'row'} justifyContent={'center'}>
          <ContentAreaTitle>Оптимизации</ContentAreaTitle>
        </Container>
        <Container width={`100%`} alignItems={`flex-start`} justifyContent={`flex-start`}>
          <CardText>
            Помимо оптимизаций, описанных во вкладке описание в разделе{' '}
            <TextStress
              css={`
                cursor: pointer;
              `}
              onClick={onSearchGoodsOptimizationsClick}
            >
              Поиск товаров
            </TextStress>
            . Были внедрены следующие оптимизации:
          </CardText>
          <StyledUl>
            <CardText as={`li`}>
              <TextBold>Ленивая загрузка</TextBold>, или lazy loading, была внедрена для некоторых
              UI-компонентов, страниц и изображений, чтобы уменьшить размер начального бандла и
              ускорить первоначальную загрузку.
              <StyledUl>
                <CardText as={`li`}>
                  Страницы. Менее приоритетные страницы, такие как страница контактов, загружаются с
                  помощью ленивой загрузки, то есть только при переходе пользователя на них.
                </CardText>
                <CardText as={`li`}>
                  UI-компоненты. Ленивая загрузка также применяется к компонентам, которые остаются
                  невидимыми до момента взаимодействия с пользователем, например, модальные окна или
                  полноэкранная галерея изображений.
                </CardText>
                <CardText as={`li`}>
                  Изображения. Изображения на главной странице загружаются после прокрутки страницы
                  пользователем, когда до изображения остается 512 пикселей. Это реализовано с
                  помощью{' '}
                  <StyledLink
                    href={`https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API`}
                    target={`_blank`}
                  >
                    Intersection Observer API
                  </StyledLink>
                  : когда изображение попадает в обозначенную область видимости, состояние
                  переменной ссылки на изображение изменяется с пустой строки на URL изображения, и
                  начинается его загрузка.
                </CardText>
              </StyledUl>
              При ленивой загрузке страниц и UI-компонентов отображается загрузочный индикатор.
              Чтобы избежать резких изменений при появлении индикатора, предусмотрена минимальная
              задержка в 200 миллисекунд.
            </CardText>
            <CardText as={`li`}>
              <TextBold>Кэширование и инвалидация запросов.</TextBold> Это всё происходит на стороне
              фронтенда, благодаря библиотеке{' '}
              <StyledLink href={`https://tanstack.com/query/latest`} target={`_blank`}>
                react-query
              </StyledLink>
              .
              <StyledUl>
                <CardText as={`li`}>
                  По умолчанию, значения gcTime (время сборки мусора) и staleTime (время устаревания
                  данных) установлены на 10 и 5 минут соответственно. Запросы, не имеющие активных
                  инстансов хука useQuery, помечаются как неактивные и остаются в кэше на случай,
                  если хук useQuery с тем же ключом будет снова смонтирован. Если запрос остается
                  неактивным дольше, чем указано в gcTime, его данные удаляются сборщиком мусора
                  библиотеки react-query. Если время с момента последней загрузки превышает
                  staleTime, сначала отображаются устаревшие данные, пока идет обновление, а затем
                  они заменяются на новые данные. Для запросов, которые маловероятно изменятся,
                  например, для запроса категорий товаров, gcTime и staleTime устанавливаются на
                  бесконечность, чтобы избежать лишних запросов.
                </CardText>
                <CardText as={`li`}>
                  Запросы могут инвалидироваться после изменения данных на сервере, инициированного
                  с фронтенда. Например, отзывы о товаре сортируются по полезности (чем больше
                  разница между лайками и дизлайками, тем полезнее отзыв). Когда пользователь ставит
                  лайк одному из отзывов, порядок отзывов может измениться, поэтому запрос отзывов с
                  этой сортировкой инвалидируется после успешной мутации (лайка отзыва). Отзывы
                  загружаются заново в фоновом режиме, пока пользователь видит анимацию
                  `&quot;`skeleton`&quot;`.
                </CardText>
              </StyledUl>
            </CardText>
            <CardText as={`li`}>
              <TextBold>Предзагрузка (prefetching).</TextBold> В компоненте AppRootRoute, после
              загрузки основных данных (например, категорий), происходит предзагрузка второстепенных
              данных, которые маловероятно изменятся (значения gcTime и staleTime могут быть
              установлены на бесконечность) и могут понадобиться в будущем, например, предзагрузка
              заказов пользователя. Также на странице категории товаров происходит предзагрузка
              следующей страницы товаров.
            </CardText>
            <CardText as={`li`}>
              <TextBold>Кэширование при помощи nginx.</TextBold>
              <StyledUl>
                <CardText as={`li`}>
                  Изображения. Для запросов к изображениям устанавливается заголовок Cache-Control:
                  `&quot;`max-age=604800, stale-while-revalidate=86400, public, must-revalidate,
                  immutable`&quot;`. Поскольку изображения обновляются редко, для них можно
                  установить длительный период `&quot;`свежести данных`&quot;`. По той же причине и
                  чтобы избежать проксирования запросов к изображениям на бэкэнд, я настроил nginx
                  на кэширование ответов на запросы изображений в определенной папке на диске.
                </CardText>
                <CardText as={`li`}>
                  Категории товаров. Устанавливается директива Cache-Control: `&quot;`private,
                  max-age=43200, stale-while-revalidate=86400, must-revalidate, immutable`&quot;`,
                  так как категории товаров редко изменяются, но необходимы для старта
                  фронтенд-приложения.
                </CardText>
                <CardText as={`li`}>
                  Для остальных api запросов Cache-Control: `&quot;`private, no-cache`&quot;`. Это
                  означает, что перед использованием содержимое ответа должно быть повторно
                  проверено. Если содержимое изменилось, сервер возвращает новый ответ с кодом 200
                  OK. Если содержимое не изменилось, быстро возвращается легковесный ответ с кодом
                  304 Not Modified.
                </CardText>
              </StyledUl>
            </CardText>
            <CardText as={`li`}>
              <TextBold>Сжатие изображений.</TextBold> Все изображения хранятся в сжатом виде.
            </CardText>
            <CardText as={`li`}>
              <TextBold>Сжатие данных при помощи nginx.</TextBold> Для уменьшения объема
              передаваемых данных Nginx сжимает файлы текстовых форматов. Например, при загрузке
              корневой страницы `&quot;`/`&quot;` размер переданных файлов составил 368kB, а после
              их разжатия — 880kB. Таким образом, сжатие уменьшило размер переданных данных более
              чем в два раза. Файлы изображений не сжимаются при помощи nginx, поскольку они уже
              заранее были сжаты и повторное сжатие не приносит желаемого результата, но при этом
              расходует серверные ресурсы и занимает время на обработку запроса.
            </CardText>
          </StyledUl>
        </Container>
      </Container>
    );
  }
);

export { VitrinaOptimization };
