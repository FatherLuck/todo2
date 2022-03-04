//Один из компонентов для создание туду
// Нужно добавить этот компонент в app.js, чтобы оно подключилось к приложению.

import TodoItem from './TodoItem';
import TodoAdd from './TodoAdd';
import { useState } from 'react';
const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

export default function TodoList(props) {
  // Экспортирую функцию TodoList по умолчанию
  //дальше возвращаю определённый Jsx код с помощью ретёрна.
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: 'Купить дом' },
    { id: 2, completed: false, title: 'Посадить дерево' },
    { id: 3, completed: false, title: 'Вырастить сына' },
  ]);

  return (
    <ul style={styles.ul}>
      <TodoAdd todos={todos} setTodos={setTodos} />
      {todos.map((todo) => {
        return <TodoItem todo={todo} todos={todos} setTodos={setTodos} />;
      })}
      {/* <TodoItem text="3" /> */}
    </ul>
  );
}
