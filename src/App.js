import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Box } from '@mui/material';
import { ReactContext } from './context';
import TodoList from './components/TodoList';
import Header from './components/Header/Header';
import NewsLine from './components/NewsLine';

import styles from './App.module.css'

function App() {
  const queryClient = new QueryClient()
  const [newsLineVisibility, setNewsLineVisibility] = useState(false)
  const value = { newsLineVisibility, setNewsLineVisibility }

  return (
    <ReactContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <Box className={styles.app}>
          <Box className={styles.container}>
            <Header />
            <TodoList />
            {newsLineVisibility && <NewsLine />}
          </Box>
        </Box>
      </QueryClientProvider>
    </ReactContext.Provider>
  );
}

export default App;
