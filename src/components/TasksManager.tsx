import styled, { useTheme } from 'styled-components';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BiCircle } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';

import { Tasks } from '../types';
import { useTasksData } from '../hooks/useTasksData';

function TasksManager() {
  const { tasks, setTasks } = useTasksData();
  const styledTheme = useTheme();

  const updateTaskHandle = (id: string, task: Tasks) => {
    const action = task.isCompleted ? 'undone' : 'done';
    const newTask = {
      ...task,
      isCompleted: !task.isCompleted,
    };
    setTasks((oldState: any) => {
      return oldState.map((item: Tasks) => {
        //gets everything that was already in item, and updates "done"
        //else returns unmodified item
        return item.id === id ? newTask : item;
      });
    });

    if (action === 'done') {
      setTasks((oldState: any) => {
        const oldStateFilter = oldState.filter((item: Tasks) => item.id !== id);
        return [...oldStateFilter, newTask];
      });
    } else {
      setTasks((oldState: any) => {
        const oldStateFilter = oldState.filter((item: Tasks) => item.id !== id);
        return [newTask, ...oldStateFilter];
      });
    }
  };

  const removeTaskHandle = (id: string) => {
    setTasks((oldState: any) => {
      const oldStateFilter = oldState.filter((item: Tasks) => item.id !== id);
      return [...oldStateFilter];
    });
  };

  return (
    <Container>
      {tasks?.map((task) => (
        <TaskContainer key={task?.id} isCompleted={task?.isCompleted}>
          <div>
            <CompleteTaskButton
              onClick={() => updateTaskHandle(task?.id, task)}
              isChecked={task?.isCompleted}
            >
              {!task?.isCompleted ? (
                <BiCircle size={18} color={styledTheme.blue} />
              ) : (
                <FaCheckCircle color={styledTheme.purpleDark} size={18} />
              )}
            </CompleteTaskButton>
            <p>{task?.description}</p>
          </div>
          <RemoveTaskButton onClick={() => removeTaskHandle(task?.id)}>
            <FaRegTrashAlt size={18} />
          </RemoveTaskButton>
        </TaskContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface TaskContainerProps {
  isCompleted: boolean;
}

const TaskContainer = styled.div<TaskContainerProps>`
  background-color: ${({ theme }) => theme.gray500};

  border: 1px solid ${({ theme }) => theme.gray400};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  transition: all 0.2s;

  div {
    display: flex;
    align-items: center;
  }

  p {
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.4;
    transition: all 0.2s;

    color: ${(props) =>
      props.isCompleted ? props.theme.gray300 : props.theme.gray100};

    text-decoration-line: ${(props) =>
      props.isCompleted ? 'line-through' : 'none'};
  }
`;

const RemoveTaskButton = styled.button`
  background-color: transparent;
  width: 24px;
  min-width: 24px;
  height: 24px;

  border: none;
  border-radius: 4px;

  transition: background-color 0.2s;

  svg {
    width: 14px;
    height: 14px;
    fill: ${({ theme }) => theme.gray300};
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray400};
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.danger};
    }
  }
`;

interface CompleteTaskButtonProps {
  isChecked: boolean;
}

const CompleteTaskButton = styled.button<CompleteTaskButtonProps>`
  background-color: transparent;
  width: 18px;
  height: 18px;

  border: none;
  border-radius: 50%;
  margin-right: 15px;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.gray400};
    cursor: pointer;

    svg {
      fill: ${(props) =>
        props.isChecked ? props.theme.purple : props.theme.blueDark};
    }
  }
`;

export { TasksManager };
