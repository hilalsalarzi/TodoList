import React from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={toggleTodo}>{todo.text}</span>
            <button onClick={removeTodo}>Remove</button>
        </li>
    );
};

export default TodoItem;
