import React from 'react';
import './todolist.css';

import TodoItem from './todoitem';

function Todolist() {
    return (
        <div className ="todolist">
            <TodoItem done = {true}/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    );
  }
  
  export default Todolist;