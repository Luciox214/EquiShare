import React, { useState } from "react";

const AsignaciónGastos = () => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [montoGasto, setMontoGasto] = useState("");
  const [fechaGasto, setFechaGasto] = useState("");
  const [categoriaGasto, setCategoriaGasto] = useState("Alimentos");
  const [divisionGasto, setDivisionGasto] = useState("equitativa");
  const [porcentajes, setPorcentajes] = useState({});
  const [miembrosSeleccionados, setMiembrosSeleccionados] = useState([]);
  const [miembrosProyecto, setMiembrosProyecto] = useState(["Miembro 1"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log("Formulario de Asignación de Gastos Enviado!");
  };

  const handlePorcentajeChange = (miembro, valor) => {
    setPorcentajes({
      ...porcentajes,
      [miembro]: valor,
    });
  };

  const agregarMiembro = () => {
    const nuevoMiembro = `Miembro ${miembrosProyecto.length + 1}`;
    setMiembrosProyecto([...miembrosProyecto, nuevoMiembro]);
  };

  return (
    <div className="contenedor">
      <form onSubmit={handleSubmit} className="formulario">
        <div>
          <label htmlFor="nombreGasto">Nombre del Gasto</label>
          <input
            type="text"
            id="nombreGasto"
            name="nombreGasto"
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
            placeholder="Nombre del Gasto"
          />
        </div>

        <div>
          <label htmlFor="montoGasto">Monto Total del Gasto</label>
          <input
            type="number"
            id="montoGasto"
            name="montoGasto"
            value={montoGasto}
            onChange={(e) => setMontoGasto(e.target.value)}
            placeholder="Monto Total del Gasto"
          />
        </div>

        <div>
          <label htmlFor="fechaGasto">Fecha del Gasto</label>
          <input
            type="date"
            id="fechaGasto"
            name="fechaGasto"
            value={fechaGasto}
            onChange={(e) => setFechaGasto(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="categoriaGasto">Categoría del Gasto</label>
          <select
            id="categoriaGasto"
            name="categoriaGasto"
            value={categoriaGasto}
            onChange={(e) => setCategoriaGasto(e.target.value)}
          >
            <option value="Alimentos">Alimentos</option>
            <option value="Transporte">Transporte</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div className="division-gasto">
          <div>
            <label htmlFor="equitativa">División Equitativa</label>
            <input
              type="radio"
              id="equitativa"
              name="divisionGasto"
              value="equitativa"
              checked={divisionGasto === "equitativa"}
              onChange={(e) => setDivisionGasto(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="porcentajes">División por Porcentajes</label>
            <input
              type="radio"
              id="porcentajes"
              name="divisionGasto"
              value="porcentajes"
              checked={divisionGasto === "porcentajes"}
              onChange={(e) => setDivisionGasto(e.target.value)}
            />
          </div>
        </div>

        {divisionGasto === "porcentajes" && (
          <div>
            <label>Asignación por Porcentaje</label>
            {miembrosProyecto.map((miembro) => (
              <div key={miembro}>
                <label htmlFor={`porcentaje-${miembro}`}>{miembro}</label>
                <input
                  type="number"
                  id={`porcentaje-${miembro}`}
                  name={`porcentaje-${miembro}`}
                  value={porcentajes[miembro] || ""}
                  onChange={(e) =>
                    handlePorcentajeChange(miembro, e.target.value)
                  }
                  placeholder={`Porcentaje para ${miembro}`}
                />
              </div>
            ))}
          </div>
        )}

        <div className="miembros-proyecto">
          <label>Miembros del Proyecto</label>
          {miembrosProyecto.map((miembro) => (
            <div key={miembro}>
              <input
                type="checkbox"
                id={`miembro-${miembro}`}
                name="miembrosProyecto"
                value={miembro}
                checked={miembrosSeleccionados.includes(miembro)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setMiembrosSeleccionados([
                      ...miembrosSeleccionados,
                      miembro,
                    ]);
                  } else {
                    setMiembrosSeleccionados(
                      miembrosSeleccionados.filter((m) => m !== miembro)
                    );
                  }
                }}
              />
              <label htmlFor={`miembro-${miembro}`}>{miembro}</label>
            </div>
          ))}
          <button type="button" onClick={agregarMiembro}>
            Agregar Miembro
          </button>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default AsignaciónGastos;
