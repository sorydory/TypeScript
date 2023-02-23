import React from 'react';

//상태값 count
//상태 업데이트 함수 onIncrease, onDecrease
type CounterProps = {
    count:number;
    onIncrease:() => void;  //매개변수 없고 리턴도 없음
    onDecrease:() => void;  
}
const Counter = ({count,onIncrease,onDecrease}) => {
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;