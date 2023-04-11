import styles from "./todo.module.css";
import { BiTrash, BiEdit } from "react-icons/bi";
import { BsCheck2Square } from "react-icons/bs";
import { IconContext } from "react-icons";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={`${todo.isCompleted && styles.completed}`}>
          {todo.text}
        </span>
      </div>
      <div className={styles.button}>
        <button onClick={onComplete}>
          <BsCheck2Square />
        </button>
        <button onClick={onEdit}>
          <BiEdit />
        </button>
        <button onClick={onDelete}>
          {/* <BiTrash /> */}
          <IconContext.Provider value={{ color: "#FF414D", size: "20px" }}>
            <div>
              <BiTrash />
            </div>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default Todo;
