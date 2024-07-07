import { makeTabWithoutSetIndex } from '@components/projectsPage/projectCard/TabInterfaces';
import { Container } from '@components';
import { cardTab, CardText, ContentAreaTitle } from '../projectCard/ContentAreaTypography';

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

export { ZavodPrehistory };
