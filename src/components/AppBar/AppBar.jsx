import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";

export const AppBar = () => {
  const value = useSelector((state) => state.some.value);
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
