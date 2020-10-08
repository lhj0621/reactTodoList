import React from 'react';
import './todohead.css';
import { useTodoState } from '../TodoContext';

function TodoHead() {
    const todos = useTodoState();
    const todoCount = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
        <div className ='head'>
            <h1>{dateString}</h1>
            <div className="todo-count">{todoCount.length}개 남음</div>
        </div>
    );
  }
  
  export default TodoHead;