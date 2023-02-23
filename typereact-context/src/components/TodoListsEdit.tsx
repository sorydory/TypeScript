import React from 'react';
import { useTodoDispatch, useTodoState } from '../context/TodoContext';

const TodoListsEdit = () => {
    const todos = useTodoState();
    const dispatch = useTodoDispatch();
    const onToggletodo = (id:number) => {
        dispatch({type:"TOGGLETODO", id:id})
    }
    const onDeltodo = (id:number) => {
        dispatch({type:"DELTODO", id:id})
    }
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} style={{background: todo.isDone ? "yellow" : undefined}}>
                    <span onClick={()=>onToggletodo(todo.id)}>{todo.text}</span>
                    <button onClick={()=>onDeltodo(todo.id)}>삭제</button></li>)}
            </ul> 
        </div>
    );
};

export default TodoListsEdit;