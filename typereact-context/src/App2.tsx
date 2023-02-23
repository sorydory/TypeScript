import React from 'react';
import TodoContext from './context/TodoContext';
import InputTodoEdit from './components/InputTodoEdit';
import TodoListsEdit from './components/TodoListsEdit';
const App2 = () => {
    return (
        <TodoContext>
            <InputTodoEdit/>
            <TodoListsEdit/>
        </TodoContext>
    );
};

export default App2;