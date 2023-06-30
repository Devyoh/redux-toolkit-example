import { useSelector } from "react-redux";
import TaskItem from "./item";

const TasksList = () => {
  const tasks = useSelector((state) => state.todo)
  return (
    <>
      {tasks.map((t) => (
        <TaskItem task={t} key={t.id}/>
      ))}
    </>
  );
};

export default TasksList;
