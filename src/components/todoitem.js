import React from 'react';
import styled, { css } from 'styled-components';
import { RiDeleteBin5Fill, RiCheckDoubleLine } from 'react-icons/ri';

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
        props.done &&
        css`
      color: #ced4da;
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
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid ;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  ${props =>
        props.done &&
        css`
        border: 1px solid #ff0000;
        color: #ff0000;
      `}
`;

function TodoItem({ id, text, done }) {
    return (
        <TodoItemBox>
            <CheckCircle done={done}>{done && <RiCheckDoubleLine />}</CheckCircle>
            <Text done={done}>1312321</Text>
            <Remove>
                <RiDeleteBin5Fill />
            </Remove>
        </TodoItemBox>
    );
}

export default TodoItem;