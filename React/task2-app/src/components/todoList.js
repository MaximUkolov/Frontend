import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue.trim() }]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Список дел</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите новое дело..."
      />
      <button onClick={handleAddTodo}>Добавить</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;