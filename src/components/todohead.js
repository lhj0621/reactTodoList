import React from 'react';
import './todohead.css';

function TodoHead() {
    return (
        <div className ='head'>
            <h1>년 월 일</h1>
            <div className="todo-count">2개 남음</div>
        </div>
    );
  }
  
  export default TodoHead;