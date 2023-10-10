export const VisibilityControlBebida = ({
  setShowCompletedBebida,
  cleanBebida,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("¿Desea reiniciar la App?")) {
      cleanBebida();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={(e) => setShowCompletedBebida(e.target.checked)}
          checked={isChecked}
        />
        <label>Mostrar bebidas pagadas</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Limpiar datos bebidas
      </button>
    </div>
  );
};
