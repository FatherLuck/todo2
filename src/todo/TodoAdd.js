import { useState } from 'react';

export default function TodoAdd({ todos, setTodos }) {
  const [value, setValue] = useState('');
  const addTodo = () => {
    console.log(todos.lenght);
    console.log(todos);
    console.log({ id: +todos.lenght + 1, title: value });
    setTodos([...todos, { id: todos.lenght + 1, title: value }]);
  };
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="button" onClick={addTodo}>
        добавить
      </button>
    </div>
  );
}
