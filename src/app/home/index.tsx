import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { addTodo, toggleTodo, removeTodo } from '../../redux/todoSlice';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false
      }));
      setText('');
    }
  };

  return ( 
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-600">Todo List</h1>
        <div className="mb-6 flex items-center">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-300 p-3 mr-2 flex-1"
            placeholder="Add a new todo"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Add Todo
          </button>
        </div>
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center">
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`flex-1 cursor-pointer text-xl ${todo.completed ? 'line-through text-gray-500' : 'text-green-600'}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-4 py-2 rounded ml-4"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
