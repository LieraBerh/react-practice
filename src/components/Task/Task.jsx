import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useSelector } from "react-redux";

export const Task = ({ task }) => {
  const value = useSelector((state) => state.some.value);
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
