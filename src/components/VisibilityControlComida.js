export const VisibilityControlComida = ({
  setShowCompleted,
  cleanComida,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("¿Desea reiniciar la App?")) {
      cleanComida();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
          checked={isChecked}
        />
        <label>Mostrar comidas pagadas</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Limpiar datos comidas
      </button>
    </div>
  );
};
