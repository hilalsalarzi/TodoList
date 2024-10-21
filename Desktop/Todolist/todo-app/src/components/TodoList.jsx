import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() === '') return;
        setTodos([...todos, { text: inputValue, completed: false }]);
        setInputValue('');
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) 
