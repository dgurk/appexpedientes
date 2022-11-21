import Expediente from "./Expediente";

function ListadoExpedientes({ expedientes,setExpediente, eliminarExpediente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {expedientes && expedientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">ListadoExpedientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              {" "}
              Causas Judiciales{" "}
            </span>
          </p>

          {expedientes.map((expediente) => (
            <Expediente key={expediente.id} expediente={expediente} 
            setExpediente={setExpediente}
            eliminarExpediente={eliminarExpediente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Todavía no ha realizado consulta</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Agregue los expedientes a consultar {""}
            
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoExpedientes;



