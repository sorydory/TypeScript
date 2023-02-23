import React, { createContext, Dispatch, useContext, useReducer } from 'react';

// 상태를 위한 타입 
type State = {
    id: number;
    text: string;
    isDone: boolean;
};
// 액션을 위한 타입
type Action = 
{ type: "ADDTODO"; todo: State } 
| { type: "TOGGLETODO"; id: number } 
| { type: "DELTODO"; id:number }
// 디스패치를 위한 타입 (Dispatch를 리액트에서 불러올수 있음)
// 액션들의 타입을 Dispatch 제네릭으로 지정 
type SampleDispatch = Dispatch<Action>;

// Context 생성하기
const TodoStateContext = createContext<State[]| null >(null);
const TodoDispatchContext = createContext<SampleDispatch | null>(null);
const initialState:State[] = [
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
function reducer(state: State[], action:Action ): State []{
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

const TodoContext = ({children}:{children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

export default TodoContext;

export function useTodoState(){
    const state = useContext(TodoStateContext);
    if(!state) throw new Error('유효하지 않습니다.');
    return state;
}
export function useTodoDispatch(){
    const dispatch = useContext(TodoDispatchContext);
    if(!dispatch) throw new Error('유효하지 않습니다.');
    return dispatch;
}