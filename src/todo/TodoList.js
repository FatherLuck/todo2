//Один из компонентов для создание туду
// Нужно добавить этот компонент в app.js, чтобы оно подключилось к приложению.

import TodoItem from './TodoItem';
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
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} />;
      })}
      {/* <TodoItem text="3" /> */}
    </ul>
  );
}
