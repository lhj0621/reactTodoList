import React from 'react';

import TodoFrame from './components/todoframe';
import TodoHead from './components/todohead';
import Todolist from './components/todolist';
function App() {
  return (
    <TodoFrame>
      <TodoHead/>
      <Todolist/>
    </TodoFrame>
  
  );
}

export default App;
