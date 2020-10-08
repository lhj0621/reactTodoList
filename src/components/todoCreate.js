import React,  { useState }  from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 80px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    nextId.current += 1;
  };

    return (
        <InsertForm onSubmit={onSubmit}>
            <Input 
              autoFocus 
              placeholder="할 일을 입력 후, Enter 를 누르세요" 
              onChange={onChange} 
              value={value}
            />
        </InsertForm>
    );
}

export default TodoCreate;