import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

const MAX_COUNT = 50;
export default function CreateTodo(props) {
  const { onCreate } = props;
  const inputRef = React.createRef();
  const [count, setCount] = useState(MAX_COUNT);

  const handleEnterTodoText = e => {
    onCreate(e.target.value);
    inputRef.current.setState({
      value: '',
    });
  };

  const handleKeyDown = e => {
    const text = e.target.value;
    if (e.key === 'Backspace') {
      return;
    }

    if (MAX_COUNT <= text.length) {
      e.preventDefault();
    }
  };

  const handleKeyUp = e => {
    const text = e.target.value;
    setCount(MAX_COUNT - text.length);
  };

  useEffect(() => {
    if (count <= 0) {
      alert('최대 50자까지만 쓸수 있습니다.');
    }
  }, [count]);

  return (
    <div className="CreateTodo">
      <Input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onPressEnter={handleEnterTodoText}
        addonAfter={<div>{count}</div>}
      />
    </div>
  );
}
