import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useTasksData } from '../hooks/useTasksData';

function NewTaskBar() {
  const [inputTask, setInputTask] = useState('');
  const { setTasks } = useTasksData();

  const addNewTaskHandle = () => {
    const newTask = {
      id: `task-${uuidv4()}`,
      isCompleted: false,
      description: inputTask,
    };
    setTasks((oldState: any) => [newTask, ...oldState]);
    return setInputTask('');
  };
  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') return addNewTaskHandle();
  };

  return (
    <NewTaskBarContainer>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={inputTask}
        onChange={(event) => setInputTask(event.target.value)}
        onKeyDown={keyDownHandler}
      />
      <button type='button' onClick={addNewTaskHandle}>
        Criar +
      </button>
    </NewTaskBarContainer>
  );
}

const NewTaskBarContainer = styled.div`
  max-width: 46rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: relative;
  top: -27px;

  input {
    min-width: 40rem;
    height: 54px;
    padding: 1rem;
    outline: none;

    background-color: ${({ theme }) => theme.gray500};
    border: 1px solid ${({ theme }) => theme.gray700};
    border-radius: 8px;

    color: ${({ theme }) => theme.gray100};

    &:focus-visible {
      border: 1px solid ${({ theme }) => theme.purple} !important;
    }
  }

  button {
    width: 90px;
    height: 52px;
    outline: none;
    border: none;

    background-color: ${({ theme }) => theme.blueDark};
    border-radius: 8px;

    color: ${({ theme }) => theme.gray100};
    font-size: 0.875rem;
    line-height: 1.4;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.blue};
      cursor: pointer;
    }
  }
`;

export { NewTaskBar };
