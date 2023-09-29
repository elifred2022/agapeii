export const BebidaRow = ({ bebida, toggleBebida }) => {
  return (
    <>
      <tr>
        <td>{bebida.name}</td>
        <td>{bebida.comida}</td>
        <td>${bebida.costoBebida}</td>
        <td>
          <input
            type="checkbox"
            checked={bebida.done}
            onChange={() => toggleBebida(bebida)}
          />
        </td>
      </tr>
    </>
  );
};
