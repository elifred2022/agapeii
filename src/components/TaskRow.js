export const TaskRow = ({ comida, toggleComida }) => {
  return (
    <>
      <tr>
        <td>{comida.name}</td>
        <td>{comida.comida}</td>
        <td>${comida.costoComida}</td>
        <td>
          <input
            type="checkbox"
            checked={comida.done}
            onChange={() => toggleComida(comida)}
          />
        </td>
      </tr>
    </>
  );
};

//
