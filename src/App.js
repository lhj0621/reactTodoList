import React from 'react';

import TodoFrame from './components/todoframe';
import TodoHead from './components/todohead';
import Todolist from './components/todolist';
import TodoCreate from './components/todoCreate';

function App() {
  return (
    <TodoFrame>
      <TodoHead/>
      <Todolist/>
      <TodoCreate/>
    </TodoFrame>
  );
}

export default App;
