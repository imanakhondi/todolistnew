import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./todoList.module.css"

const TodoList = (props) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editTodo = (input) => {
    props.onUpdateTodo(edit.id, input);
    setEdit("");
  };
  const renderTodos = () => {
    if (props.todos.length===0) return <h3>Import todo</h3>
    return props.todos.map((todo,index) => {
      return (
        <div key={index}>
          <Todo
            todo={todo}
            key={todo.id}
            onDelete={() => props.onDelete(todo.id)}
            onComplete={() => props.onComplete(todo.id)}
            onEdit={() => setEdit(todo)}
          />
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      {edit.id ? (
        <TodoForm addTodoHandler={editTodo} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
