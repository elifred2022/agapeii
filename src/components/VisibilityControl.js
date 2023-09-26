export const VisibilityControl = ({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("¿Quieres limpiar las tareas hechas?")) {
      cleanTasks();
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
        <label>Mostrar tareas hechas</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Limpiar
      </button>
    </div>
  );
};
