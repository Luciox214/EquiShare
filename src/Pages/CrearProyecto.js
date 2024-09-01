import React, { useState } from "react";

const CrearProyecto = () => {
  const [nombreProyecto, setNombreProyecto] = useState("");
  const [descripcionProyecto, setDescripcionProyecto] = useState("");
  const [miembros, setMiembros] = useState([]);
  const [nuevoMiembro, setNuevoMiembro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el envío del formulario
    console.log(
      "Proyecto Creado:",
      nombreProyecto,
      descripcionProyecto,
      miembros
    );
  };

  const handleAddMiembro = () => {
    if (nuevoMiembro.trim() && !miembros.includes(nuevoMiembro)) {
      setMiembros([...miembros, nuevoMiembro.trim()]);
      setNuevoMiembro(""); // Limpiar el campo de texto después de agregar
    }
  };

  const handleRemoveMiembro = (miembro) => {
    setMiembros(miembros.filter((m) => m !== miembro));
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit} className="formulario">
        <div>
          <label htmlFor="nombreProyecto">Nombre del Proyecto</label>
          <input
            type="text"
            id="nombreProyecto"
            name="nombreProyecto"
            value={nombreProyecto}
            onChange={(e) => setNombreProyecto(e.target.value)}
            placeholder="Nombre del Proyecto"
          />
        </div>

        <div>
          <label htmlFor="descripcionProyecto">Descripción del Proyecto</label>
          <textarea
            id="descripcionProyecto"
            name="descripcionProyecto"
            value={descripcionProyecto}
            onChange={(e) => setDescripcionProyecto(e.target.value)}
            placeholder="Descripción del Proyecto"
          />
        </div>

        <div>
          <label htmlFor="nuevoMiembro">Agregar Miembro</label>
          <input
            type="text"
            id="nuevoMiembro"
            name="nuevoMiembro"
            value={nuevoMiembro}
            onChange={(e) => setNuevoMiembro(e.target.value)}
            placeholder="Nombre del Miembro"
          />
          <button type="button" onClick={handleAddMiembro}>
            Agregar
          </button>
        </div>

        {miembros.length > 0 && (
          <div>
            <label>Miembros del Proyecto</label>
            <ul>
              {miembros.map((miembro, index) => (
                <li key={index}>
                  {miembro}
                  <button
                    type="button"
                    onClick={() => handleRemoveMiembro(miembro)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit">Crear Proyecto</button>
      </form>
    </div>
  );
};

export default CrearProyecto;
