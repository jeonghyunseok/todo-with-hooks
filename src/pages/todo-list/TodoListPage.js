import React, { useState } from 'react';
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
  const [items, setItems] = useState(() => {
    const todo = localStorage.getItem('todos') || '[]';
    return JSON.parse(todo);
  });

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
    localStorage.setItem('todos', JSON.stringify(items));
    setItems([...items]);
  };

  const handleDeleteItem = index => {
    items.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(items));
    setItems([...items]);
  };

  const handleAddItem = text => {
    const newItems = [...items, { name: text, completed: false }];
    localStorage.setItem('todos', JSON.stringify(newItems));
    setItems(newItems);
  };

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
