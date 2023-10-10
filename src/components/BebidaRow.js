export const BebidaRow = ({ bebida, toggleBebida }) => {
  return (
    <>
      <tr>
        <td>{bebida.name}</td>
        <td>${bebida.costoBebida}</td>
        <td>{bebida.cantidadBebida}</td>

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
