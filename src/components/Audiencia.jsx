import { useState, useEffect } from "react";
import  Error  from './Error.jsx';

function Audiencia ({expedientes,setExpedientes,expediente, setExpediente}) {
  const [nombre, setAutos] = useState("");
  const [fecha, setFecha] = useState("");
  

  const [error, setError] = useState(false);

   useEffect(() => {
     if (Object.keys(expediente).length > 0) {

      setAutos(expediente.nombre)      
      setFecha(expediente.fecha)
    
     }
   
     
   }, [expediente])
   

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha =Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario

    if ([nombre, fecha].includes("")) {
      console.log("Hay Al Menos un campo vacio");

      setError(true);
      return;
    }
    setError(false);

   const objetoExpediente ={
    autos,
    fecha,
   }


   if(expediente.id){

   objetoExpediente.id = expediente.id


   const expedientesActualizados = expedientes.map(expedienteState => expedienteState.id === expediente.id ? objetoExpediente : expedienteState)
 
    setExpedientes(expedientesActualizados)
    setExpediente({})

   }else {
    objetoExpediente.id =generarId()
    setExpedientes([...expedientes, objetoExpediente]);
   }

    


    //Reiniciar el formulario
    setAutos('')
    setFecha('')
    
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">AUDIENCIAS</h2>

      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10"
      >
        {error &&  <Error><p>Los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label
            htmlFor="autos"
            className="block text-gray-700 uppercase font-bold"
          >
            Autos
          </label>

          <input
            id="autos"
            type="text"
            placeholder="introduzca nombre de la causa"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setAutos(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="audiencia"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>

          <input
            id="audiencia"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={expediente.id ? 'Editar audiencia' : 'Agregar audiencia'}
        />
      </form>
    </div>
  );
}
export default Audiencia;
