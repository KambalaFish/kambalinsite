import { Container } from '@components';
import { ContentAreaTitle } from './ProjectCard/ContentAreaTitle';
import { TextStress, CardText, cardTab } from './ProjectCard/ContentAreaTypography';

const ZavodDescription = () => (
  <Container paddingX={'0.5rem'}>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Описание</ContentAreaTitle>
    </Container>
    <Container alignItems={'flex-start'} justifyContent={'flex-start'}>
      <CardText>
        {cardTab}Чтобы потыкать и посмотреть лично нажмите кнопку &quot;попробовать&quot;.
      </CardText>
      <CardText>
        {cardTab}Далее, чтобы войти как <TextStress>администратор</TextStress> используйте логин:
        admin@admin.com и пароль: password, чтобы войти как{' '}
        <TextStress>администратор компании</TextStress> используйте логин: company@admin.com,
        пароль: password.
      </CardText>
    </Container>
  </Container>
);

interface ZavodPrehistory {
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

const ZavodPrehistory = ({ setCurrentSlide }: ZavodPrehistory) => (
  <Container paddingX={'0.5rem'} width={'100%'}>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Предыстория</ContentAreaTitle>
    </Container>
    <Container
      alignItems={['center', 'center', 'flex-start']}
      justifyContent={'flex-start'}
      width={'100%'}
      onClick={() => setCurrentSlide(1)}
    >
      <CardText>
        {cardTab}Я делал этот проект в рамках дипломной работы. Спойлер: работа не была завершена до
        конца, т.к. я ушёл в академический отпуск, а работа была передана другому человеку.
      </CardText>
      <CardText>
        {cardTab}Суть работы заключалась в том, чтобы создать аналог &quot;джиры&quot; на
        минималках. Подразумевалось, что данная работа позволила бы обслуживать множество компаний,
        и помочь управляющим на предприятиях этих компаний наладить отслеживание рабочих процессов в
        реальном времени.
      </CardText>
      <CardText>
        {cardTab}Планировалось реализовать функционал, который позволил бы создавать работников,
        отводить роли для них, объединять их в команды, отделы. Конечно же, так как это аналог джиры
        нужно было обеспечить возможность создавать подзадачи, задачи и эпики, вешать их на рабочих
        или давать им возможность самим зафиксировать задачу на себя с дальнейшим правом изменения
        статуса задачи. Ну и соответственно в дальнейшем администратор должен был иметь возможность
        отслеживать воркфлоу по задачам.
      </CardText>
      <CardText>
        {cardTab}В общем, планы были грандиозные, но реализовать я успел не так много по этому
        проекту :)
      </CardText>
    </Container>
  </Container>
);

const ZavodTechnologies = () => (
  <Container>
    <Container flexDirection={'row'} justifyContent={'center'}>
      <ContentAreaTitle>Технологии</ContentAreaTitle>
    </Container>
  </Container>
);

export { ZavodDescription, ZavodPrehistory, ZavodTechnologies };
