import React from 'react';
import './todoframe.css';

const TodoFrame = ({children}) => {
  return (

      <div className="frame">
          {children}
      </div>
  );
};

export default TodoFrame;