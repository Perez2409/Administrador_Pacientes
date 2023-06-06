import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes}) => {


    return (
        <div className="md:w-1/2 lg:w-3/5">

            {pacientes && pacientes.length
                ?//Respuesta si SI hay
                (<>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                    <p  className="text-lg mt-5 text-center mb-6">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {/*Bloque donde aparecen la informacion de los pacientes */}
                    <div className="md:h-[92vh] overflow-y-scroll">{/*Revisar como ajustar para que quede al tamaño del formulario */}

                        {pacientes.map( (paciente) => (
                            <Paciente
                            key={paciente.id}
                            paciente ={paciente}
                            />
                        ))}

                    </div>
                </>)
                ://Respuesta si No hay
                (<>
                    <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>

                    <p  className="text-lg mt-5 text-center mb-6">
                        Comienza Agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                    </p>
                </>)
            }
        </div>
    )
}

export default ListadoPacientes;