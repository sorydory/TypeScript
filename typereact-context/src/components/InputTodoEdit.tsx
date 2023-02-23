import React, { useRef, useState } from 'react';
import { useTodoDispatch } from '../context/TodoContext';

const InputTodoEdit = () => {
    const dispatch = useTodoDispatch();
    const [text, setText] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const t = e.target.value;
        setText(t);
    }
    const todoid = useRef(4);  //---> 리턴객체 { current: 4 }
    const onClick = () => {
        dispatch({
            type: "ADDTODO",
            todo:{
            id: todoid.current,
            text: text,
            isDone: false}
        })
        setText("");
        todoid.current++;
    }
    return (
        <div>
            <h1>type todo list</h1>
            <div>
                <input name='todo' value={text} onChange={onChange}/>
                <button onClick={onClick}>할일등록</button>
            </div>
        </div>
    );
};

export default InputTodoEdit;