import { useState, useEffect } from "react";
import  Error  from './Error.jsx';


function Formulario({expedientes,setExpedientes,expediente, setExpediente}) {
  const [autos, setAutos] = useState("");
  const [juzgado, setJuzgado] = useState("");
  const [jurisdiccion, setJurisdiccion] = useState("");
  const [fuero, setFuero] = useState("");
  

  const [error, setError] = useState(false);

   useEffect(() => {
     if (Object.keys(expediente).length > 0) {

      setNombre(expediente.nombre)
      setPropietario(expediente.propietario)
      setEmail(expediente.email)
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

    if ([autos,juzgado,jurisdiccion,fuero].includes("")) {
      console.log("Hay Al Menos un campo vacio");

      setError(true);
      return;
    }
    setError(false);

   const objetoExpediente ={
    autos,
    juzgado,
    jurisdiccion,
    fuero,
    
    
   
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
    setJuzgado('')
    setJurisdiccion('')
    setFuero('')
    
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10"
      >
        {error &&  <Error><p>Todos los campos son obligatorios</p></Error> }
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
            placeholder="Introduzca causa"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={autos}
            onChange={(e) => setAutos(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="juzgado"
            className="block text-gray-700 uppercase font-bold"
          >
            Juzgado
          </label>

          <input
            id="juzgado"
            type="text"
            placeholder="Introduzca radicación"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={juzgado}
            onChange={(e) => setJuzgado(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="jurisdiccion"
            className="block text-gray-700 uppercase font-bold"
          >
            Jurisdiccion
          </label>

          <input
            id="jurisdiccion"
            type="jurisdiccion"
            placeholder="Introduzca jurisdicción"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={jurisdiccion}
            onChange={(e) => setJurisdiccion(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fuero"
            className="block text-gray-700 uppercase font-bold"
          >
            Fuero
          </label>

          <input
           id="fuero"
           type="fuero"
           placeholder="Introduzca fuero"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={fuero}
           onChange={(e) => setFuero(e.target.value)}
          />
        </div>

        

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={expediente.id ? 'Editar expediente' : 'Agregar expediente'}
        />
      </form>
    </div>
  );
}
export default Formulario;




