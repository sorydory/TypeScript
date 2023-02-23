//액션타입, 액션생성함수, 리듀서
//1.액션타입
//action.type이 string으로 추론되지 않고 'counter/INCREASE'와 같이
//실제 문자열으로 추론되도록 as const 붙임

import {ActionType, createReducer,deprecated} from "typesafe-actions";
const {createStandardAction} = deprecated;

//typesafe-actions적용 전
// const INCREASE = "counter/INCREASE" as const;
// const DECREASE = "counter/DECREASE" as const;

//typesafe-actions적용 후
const increase = 'counter/INCREASE';
const decrease = 'counter/DECREASE';

//2.액션생성함수 return{type:INCREASE, payload:diff}
//typesafe-actions적용 전
//export const increase = () =>({type:INCREASE})
//export const decrease = () =>({type:DECREASE})
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();



//액션객체에 대한 타입
type CounterAction = ReturnType<typeof increase> 
| ReturnType<typeof decrease>

//상태에 대한 타입
type CounterState = {count:number}

//초기상태
const initialState = {count:0}

//3.리듀서
function counter(
    state:CounterState = initialState,
    action:CounterAction){
        switch(action.type){
            case INCREASE:
                return {count:state.count+1};
            case DECREASE:
                return {count:state.count-1};
            default 
        }
}
//typesafe-actions적용 후
//리듀서1
const counter = createReducer<CounterState, CounterAction>(initialState,(
    [INCREASE]: state => ({count:state.count +1}),
    [DECREASE]: state => ({count:state.count -1})
// ))
//리듀서2
// const counter = createReducer<CounterState, CounterAction>(initialState)
// .handleAction(INCREASE, state => ({count:state.count+1}))
// .handleAction(DECREASE, state => ({count:state.count-1}))
export default counter;