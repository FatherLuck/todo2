// Компонент отвечающий за пункты.
// Для удобства называю файл так же, как и функцию

export default function TodoItem({ todo }) {
  return <li>{todo.title}</li>;
}
/* <li>{props.text}</li>; */
