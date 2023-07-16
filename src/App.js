import { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if(todo !=="") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <h1>What are your plans for today?</h1>

      <div className='input'>
        <input
          className='inputText'
          type='text'
          name='todo'
          value={todo}
          placeholder='Create a new todo'
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          />

          <button className='add-button' onClick={addTodo}>Add</button>
      </div>

      {todos?.length > 0 ? (
        <ul className='todo-list'>
          {todos.map((todo, index) => (
            <div className='todo'>
              <li key={index} className='list'> {todo} </li>

              <button 
                className='delete-button' 
                onClick={() => {
                  deleteTodo(todo);
                }}
                >Delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <div className='empty'>
          <p>No task found</p>
        </div>
      )}
    </div>
  );
};

export default App;
