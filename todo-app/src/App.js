import './App.css';
import TodoForm from './TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", todo: { ...todo, id: todos.length } });
  }

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id: id });
  }

  const todoList = todos.map(t => (
    <Todo
      task={t.task}
      removeTodo={() => removeTodo(t.id)}
    />
  ))

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <ul>
          {todoList}
        </ul>
      </header>
    </div>
  );
}

export default App;
