import styled from 'styled-components';
import { useTasksData } from '../hooks/useTasksData';

function TasksDashboardHeader() {
  const { tasks } = useTasksData();

  return (
    <Container>
      <p>
        Tarefas criadas{' '}
        <span>{tasks.filter((item) => item.isCompleted !== true).length}</span>
      </p>
      <p>
        Concluídas{' '}
        <span>{tasks.filter((item) => item.isCompleted === true).length}</span>
      </p>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 1.25rem;

  margin-bottom: 24px;

  p {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.2;

    color: ${({ theme }) => theme.primary};

    span {
      padding: 2px 8px;
      width: 25px;
      height: 19px;
      background-color: ${({ theme }) => theme.gray400};
      border-radius: 50%;

      font-size: 0.75rem;
      line-height: 1.25;
      color: ${({ theme }) => theme.gray200};
    }
  }

  p + p {
    color: ${({ theme }) => theme.secondary};
  }
`;

export { TasksDashboardHeader };
