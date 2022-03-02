import TodoList from './todo/TodoList'; // импортирую сюда компонент тудулистЮ чтобы он заработал.

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Купить дом' },
    { id: 2, completed: false, title: 'Посадить дерево' },
    { id: 3, completed: false, title: 'Вырастить сына' },
  ];

  return (
    <div className="wrapper">
      <h1>React todo</h1>
      <TodoList todos={todos} />
      {/* добавляю тудулист в ретурн аппа для взаимодействия с ним.*/}
    </div>
  ); //добавление какой-нибудь стилистики,
  //к нему добавляю класс, который вскоре создам в index.css
}

export default App;
