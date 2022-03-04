// Компонент отвечающий за пункты.
// Для удобства называю файл так же, как и функцию
export default function TodoItem({ todo, todos, setTodos }) {
  console.log('jsjd', todo.lenght);
  const deleteClick = (id) => {
    console.log('todo', todo);
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  return (
    <span>
      <li>{todo.title}</li>
      <li>{todo.id}</li>
      <button type="button" onClick={() => deleteClick(todo.id)}>
        delete
      </button>
    </span>
  );
}
/* <li>{props.text}</li>; */
