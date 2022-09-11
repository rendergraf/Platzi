import React from 'react';
import AppUI from './AppUI';
import { TodoProvider } from '../components/Context';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}
export default App;
