import { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';

export const useTasksData = () => {
  const context = useContext(TasksContext);
  console.log('context: ', context);
  const { tasks, setTasks } = context;
  return { tasks, setTasks };
};
