import React from 'react';

import TodoFrame from './components/todoframe';
import TodoHead from './components/todohead';
import Todolist from './components/todolist';
import TodoCreate from './components/todoCreate';
import { TodoProvider } from './TodoContext'

function App() {
  return (
    <TodoProvider>
      <TodoFrame>
        <TodoHead/>
        <Todolist/>
        <TodoCreate/>
      </TodoFrame>
    </TodoProvider>
  );
}

export default App;
