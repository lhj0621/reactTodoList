import React from 'react';
import styled, { css } from 'styled-components';
import { RiDeleteBin5Fill, RiCheckDoubleLine } from 'react-icons/ri';
import { useTodoDispatch } from '../TodoContext';

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  font-weight: 500;
  letter-spacing:2px;
  ${props =>
        props.done &&
        css`
      color: #B32A59 ;
      text-decoration:line-through;
    `}
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBox = styled.div`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  align-items: center;
  &:hover {
    ${Remove} {
      display: flex;
    }
  }
`;

const CheckCircle = styled.div`
    width: 24px;
    height: 24px;
    border: 2px solid ;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  ${props =>
        props.done &&
        css`
        border: 2px solid #FF5993;
        color: #FF5993;
      `}
`;

function TodoItem({ id, text, done }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'CHECK', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

    return (
        <TodoItemBox>
            <CheckCircle done={done} onClick={onToggle}>
              {done && <RiCheckDoubleLine />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <RiDeleteBin5Fill />
            </Remove>
        </TodoItemBox>
    );
}

export default React.memo(TodoItem);