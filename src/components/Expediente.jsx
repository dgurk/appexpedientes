

const Expediente = ({expediente,setExpediente, eliminarExpediente}) => {

  const {autos, juzgado, jurisdiccion ,fuero, id} =expediente


  const handleEliminar = () => {
     const respuesta = confirm('Deseas eliminar este paciente')

     if(respuesta) {
      eliminarExpediente(id)
     }
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Autos {""}
        <span className="font-normal normal-case">{autos}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Juzgado: {""}
        <span className="font-normal normal-case">{juzgado}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Jurisdiccion: {""}
        <span className="font-normal normal-case">{jurisdiccion}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fuero: {""}
        <span className="font-normal normal-case">{fuero}</span>
      </p>

      <div className="flex justify-between mt-10">

      <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={()=> setExpediente(expediente)}
        >Editar</button>

        <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handleEliminar}
        >Eliminar</button>
      </div>

      
    </div>
  );
};

export default Expediente;


