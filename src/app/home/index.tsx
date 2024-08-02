"use client";

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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0', // grey background
  };

  const boxStyle = {
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const inputStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginRight: '10px',
    width: 'calc(100% - 120px)',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '18px',
  };

  const completedStyle = {
    textDecoration: 'line-through',
    color: '#888',
  };

  const todoTextStyle = {
    flex: 1,
    cursor: 'pointer',
    color: '#28a745', // colorful words
  };

  const deleteButtonStyle = {
    backgroundColor: '#dc3545',
    color: '#ffffff',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    marginLeft: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#007bff' }}>
          Todo List
        </h1>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={inputStyle}
            placeholder="Add a new todo"
          />
          <button
            onClick={handleAddTodo}
            style={buttonStyle}
          >
            Add Todo
          </button>
        </div>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {todos.map((todo) => (
            <li key={todo.id} style={listItemStyle}>
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{ ...todoTextStyle, ...(todo.completed ? completedStyle : {}) }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                style={deleteButtonStyle}
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
