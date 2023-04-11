import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import SelectOption from "../SelectOption/SelectOption";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from "./todoApp.module.css";
import {  toast } from 'react-toastify';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const [filterTodo, setFilterTodo] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const totalItems = todos.filter((todo) => todo.isCompleted).length;
  const totalsItems = todos.filter((todo) => todo).length;

  const [option, setOption] = useState("all");

  useEffect(() => {
    selectTodo(option.value);
  }, [todos, option]);
  useEffect(() => {
    const filterTodos = todos.filter((todo) => todo).length;
    const filtered = filterTodo.filter((todo) => todo.isCompleted).length;
    const x = 100 / filterTodos;
    if (filtered !== 0) {
      setPercentage(filtered * x);
    }
  }, [filterTodo]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
 

  const clickHandler = (e) => {
    setModal(!modal);
    if (e.target.innerText==="add"){
      e.target.style.boxShadow="none"

    }else  if (e.target.innerText==="close"){
    
      e.target.style.boxShadow="5px 5px 13px 0 rgba(48, 54, 64, 0.9)"

    }
  };
  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    const filterTodos = todos.filter((todo) => todo).length;
    const filtered = filterTodo.filter((todo) => !todo.isCompleted).length;
    const x = 100 / filterTodos;
    if (todos.filter((todo) => !todo.isCompleted).length !== 0) {
      setPercentage(0);
    } else {
      setPercentage(filtered * x);
    }
    toast.error(`todo remove successfully`)
  };
  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    if (selectedTodo.isCompleted) {
      // const totalsItems = todos.filter((todo) => todo).length;
      const x = 100 / totalsItems;
      setPercentage(percentage + x);
      toast.success(`todo completed successfully`)
    } else if (!selectedTodo.isCompleted) {
      // const totalsItems = todos.filter((todo) => todo).length;
      const x = 100 / totalsItems;
      setPercentage(percentage - x);
      toast.error(`todo uncompleted`)
    }
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    toast.success(`todo edited successfully`)
  };

  const selectTodo = (selectOption) => {
    switch (selectOption) {
      case "completed":
        {
          const filteredTodos = todos.filter((todo) => todo.isCompleted);
          setFilterTodo(filteredTodos);
        }
        break;
      case "uncompleted":
        {
          const filteredTodos = todos.filter((todo) => !todo.isCompleted);
          setFilterTodo(filteredTodos);
        }
        break;
      default:
        setFilterTodo(todos);

        break;
    }
  };
  const editTodo = (input) => {
    updateTodo(edit.id, input);
    setEdit("");
  };

  return (
    <div className={styles.container}>
      <div>
        <NavBar
          totalItems={totalItems}
          totalsItems={totalsItems}
          percentage={Math.ceil(percentage)}
        />
        <div className={styles.selectform}>
          {!edit.id ? (
            <TodoForm addTodoHandler={addTodo} />
          ) : (
            <TodoForm addTodoHandler={editTodo} edit={edit} />
          )}
          <SelectOption
            onChange={selectTodo}
            value={option}
            setOption={setOption}
          />
        </div>
        <TodoList
          edit={edit}
          setEdit={setEdit}
          todos={filterTodo}
          onDelete={deleteHandler}
          onComplete={completeHandler}
          onUpdateTodo={updateTodo}
        />
      </div>
      {modal ? (
        <div className={styles.modal}>
          <div className={styles.selectformModal}>
            {!edit.id ? (
              <TodoForm addTodoHandler={addTodo} />
            ) : (
              <TodoForm addTodoHandler={editTodo} edit={edit} />
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer clickHandler={clickHandler} modal={modal} />
    </div>
  );
};

export default TodoApp;
