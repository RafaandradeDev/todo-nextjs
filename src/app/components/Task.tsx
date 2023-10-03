import { ITask } from "@/types/ITask";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.id}</td>
      <td>{task.text}</td>
    </tr>
  );
};

export default Task;
