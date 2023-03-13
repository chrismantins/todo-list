import { createContext, ReactNode, useContext, useState } from 'react';
import { Tasks } from '../interfaces/TaksTypes';

interface TasksProviderProps {
  tasks: Tasks[];
  setTasks: Function;
}

export const TasksContext = createContext<TasksProviderProps>(
  {} as TasksProviderProps
);

function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState([] as Tasks[]);
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksProvider };
