import { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';

export const useTasksData = () => {
  const context = useContext(TasksContext);
  const { tasks, setTasks } = context;
  return { tasks, setTasks };
};
