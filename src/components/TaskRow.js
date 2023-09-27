export const TaskRow = ({ task, comida, toggleTask }) => {
  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.comida}</td>
      <td>{task.costoComida}</td>
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
