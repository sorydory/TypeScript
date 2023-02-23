import { ActionType, createReducer, deprecated } from "typesafe-action";
const { createStandardAction, createAction } = deprecated;
//1.액션타입
// const ADD_TODO = "todos/ADD_TODO" as const;
// const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
// const REMOVE_TODO = "todos/REMOVE_TODO" as const;
//적용 후
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

//새로운 항목 추가할 때 사용할 id값
let nextId = 1;

//2.액션생성함수
// export const addTodo = (text.string) => ({
//     type:ADD_TODO,
//     payload:{
//         id:nextId++,
//         text:text
//     }
// })
// export const removeTodo = (id:number) => {
//     return {
//         type:REMOVE_TODO,
//         payload: id
//     }
// }
// export const toggleTodo = (id:number) => ({
//         type:TOGGLE_TODO,
//         payload:id
//     })
//typesafe-actions적용 후
export const addTodo = createAction(
  ADD_TODO,
  (action) => (text: string) =>
    action({
      id: nextId++,
      text: text,
    })
);
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

//액션 객체에 대한 타입
//ReturnType<typeof 함수> 특정함수의 리턴 타입을 추론
//typesafe-actions적용 전
// type TodoAction =
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof removeTodo>
//   | ReturnType<typeof toggleTodo>;
//typesafe-actions 적용 전
const actions = { addTodo, toggleTodo, removeTodo };
type TodoAction = ActionType<typeof actions>;

//상태에서 사용할 할 일 항목의 타입 정의
export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

//상태에 대한 타입
export type TodoState = Todo[];

//초기 상태 선언
const initialState: TodoState = [];

//3.리듀서함수 - state타입 action타입

// function todos(state: TodoState = initialState, action: TodoAction) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           id: action.payload.id,
//           text: action.payload.text,
//           isDone: false,
//         },
//       ];
//     case TOGGLE_TODO:
//       //이전 상태 배열을 순환하며 배열요소의 id값과 action.payload
//       //값이 일치하는지 ? 일치하면 요소의 isDone을 반전해서 리턴
//       //일치하지 않으면 배열 요소 그래도 리턴
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
//       );
//     case REMOVE_TODO:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }
//typesafe-actions적용 후
const todos = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO]: (state, action) => [
    ...State,
    { ...action.payload, isDone: false },
  ],
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter((todo) => todo.id !== id),
});
export default todos;
