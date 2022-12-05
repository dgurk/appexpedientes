import { useState, useEffect } from "react";


import Formulario from "./Formulario";
import ListadoExpedientes from "./ListadoExpedientes";


 
function FormularioPadre() {
  const [expedientes, setExpedientes] = useState([]);
  const [expediente, setExpediente] = useState({});

  useEffect(() => {

     const obtenerLS = () =>{

      const expedientesLS = JSON.parse(localStorage.getItem('expedientes')) ?? [];

      setExpedientes(expedientesLS)
     }
     obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('expedientes', JSON.stringify(expedientes));
  }, [expedientes]);

  const eliminarExpediente = (id) => {
    const expedientesActualizados = expedientes.filter(
      (expediente) => expediente.id !== id
    );
    setExpediente(expedientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          expedientes={expedientes}
          setExpedientes={setExpedientes}
          expediente={expediente}
          setExpediente={setExpediente}
        />
        <ListadoExpedientes
          expedientes={expedientes}
          setExpediente={setExpediente}
          eliminarExpediente={eliminarExpediente}
        />
      </div>
    </div>
    
  );
}

export default FormularioPadre;




