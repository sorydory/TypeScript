import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TodoInsert from "../components/TodoInsert";
import { rootState } from "../modules";

const TodosContainer = () => {
  const todos = useSelector((state: rootState) => state.todos);
  const dispatch = useDispatch();
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <TodoInsert onInsert={onInsert} />
      <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
    </div>
  );
};

export default TodosContainer;