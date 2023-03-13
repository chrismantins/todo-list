import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { TasksDashboardHeader } from '../components/TasksDashboardHeader';
import { EmptyTasks } from '../components/EmptyTasks';
import { TasksManager } from '../components/TasksManager';
import { useTasksData } from '../hooks/useTasksData';

function TasksDashboard() {
  const { tasks } = useTasksData();
  return (
    <Container>
      <TasksDashboardHeader />
      {tasks?.length === 0 ? <EmptyTasks /> : <TasksManager />}
    </Container>
  );
}

const Container = styled.div`
  max-width: 46rem;
  margin: 2.3rem auto 0;
`;

export { TasksDashboard };
