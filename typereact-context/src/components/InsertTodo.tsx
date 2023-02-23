import React, { useRef, useState } from 'react';
import { dataType } from '../App';
interface InsertProps {
    onAddtodo:(todo:dataType)=>void;
}
const InsertTodo = ({onAddtodo}:InsertProps) => {
    const [ input, setInput ] = useState<string>("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setInput(value);
    }
    const ref = useRef(4);
    const onClick = () => {
        onAddtodo({
            id: ref.current,
            text: input,
            isDone: false
        })
        ref.current++;
        setInput("");
    }
    return (
        <div>
            <h1>type todo list</h1>
            <div>
                <input name='todo' value={input} onChange={onChange}/>
                <button onClick={onClick}>할일등록</button>
            </div>
        </div>
    );
};

export default InsertTodo;