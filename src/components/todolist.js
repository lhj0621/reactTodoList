import React from 'react';
import './todolist.css';
import TodoItem from './todoitem';
import { useTodoState } from '../TodoContext';
function Todolist() {
    const todos = useTodoState();
    return (
        <div className="todolist">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </div>
    );
}

export default Todolist;