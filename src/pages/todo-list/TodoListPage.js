import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

const Page = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto;
  min-height: 80vh;

  .CreateTodo {
    margin: 20px 0 20px 0;
  }
`;

function TodoListPage(props) {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  const handleSelectAll = () => {
    setItems(
      items.map(item => {
        item.completed = true;
        return item;
      })
    );
  };

  const handleUnselectAll = () => {
    setItems(
      items.map(item => {
        item.completed = false;
        return item;
      })
    );
  };

  const handleChangeComplete = (idx, item) => {
    items[idx] = item;
    setItems([...items]);
  };

  const handleEditItem = (index, value) => {
    items[index].name = value;
    setItems([...items]);
  };

  const handleDeleteItem = index => {
    items.splice(index, 1);
    setItems([...items]);
  };

  const handleAddItem = text => {
    setItems([...items, { name: text, completed: false }]);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  return (
    <Page>
      <CreateTodo onCreate={handleAddItem} />
      <TodoList
        items={items}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
        onSelectAll={handleSelectAll}
        onUnselectAll={handleUnselectAll}
        onChangeComplete={handleChangeComplete}
      />
    </Page>
  );
}

export default TodoListPage;
