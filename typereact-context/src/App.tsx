import { useReducer } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ReducerSample from './components/ReducerSample';
import RudecerSampleEdit from './components/RudecerSampleEdit';
import TodoLists from './components/TodoLists';
import SampleContext from './context/SampleContext';
const initialState = [
  { 
    id:1,
    text: "자바스크립트 공부",
    isDone: false
  },
  { 
    id:2,
    text: "이력서,자소서쓰기",
    isDone: false
  },
  { 
    id:3,
    text: "타입스크립트 공부",
    isDone: false
  }
];
// type Action = "ADDTODO" | "DELTODO" | "TOGGLETODO";
// interface actionType {
//   type: Action;
//   todo?: dataType;
//   id?: number;
// }
type Action = { type: "ADDTODO"; todo: dataType } 
| { type: "TOGGLETODO"; id: number } 
| { type: "DELTODO"; id:number }
export interface dataType {
  id: number;
  text: string;
  isDone: boolean;
}
function reducer(state:dataType[], action:Action ):dataType []{
  switch(action.type){
    case "ADDTODO":
      return [
        ...state,
        action.todo
      ];
    case "DELTODO":
      return state.filter(li=> li.id !== action.id);
    case "TOGGLETODO":
      return state.map(li=> li.id === action.id ? 
        {...li, isDone: !li.isDone}: li);
    default:
      return state;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer,initialState);
  const onAddtodo = (todo:dataType) => {
    dispatch({type:"ADDTODO", todo: todo})
  }
  const onToggletodo = (id:number) => {
    dispatch({type:"TOGGLETODO", id:id})
  }
  const onDeltodo = (id:number) => {
    dispatch({type:"DELTODO", id: id})
  }
  return (
    <div className="App">
      {/* <InputTodo onAddtodo={onAddtodo}/>
      <TodoLists todos={todos} 
      onToggletodo={onToggletodo} 
      onDeltodo={onDeltodo}/>
      <ReducerSample/> */}
      <SampleContext>
        <RudecerSampleEdit/>
      </SampleContext>
    </div>
  );
}

export default App;
