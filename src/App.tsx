import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { NewTaskBar } from './components/NewTaskBar';
import { TasksDashboard } from './containers/TasksDashboard';

import { rocketTheme } from './styles/themes/rocket';
import { defaultTheme } from './styles/themes/default';

import { GlobalStyle } from './styles/global';
import { TasksProvider } from './contexts/TasksContext';

function App() {
  return (
    <TasksProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <NewTaskBar />
        <TasksDashboard />
      </ThemeProvider>
    </TasksProvider>
  );
}

export { App };
