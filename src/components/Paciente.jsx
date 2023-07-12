
    const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const{mascota, propietario, email, celular, fecha, sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("¿Deseas Eliminar Este Paciente?")

        if (respuesta) {
                eliminarPaciente(id)
        }
    }


    return (
            <div className="mt-0 m-3 bg-white shadow-md py-5 px-5 rounded-lg">
                    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Mascota: {''}
                            <span className="font-normal normal-case">{mascota}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: {''}
                            <span className="font-normal normal-case">{propietario}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                            <span className="font-normal normal-case">{email}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Celular: {''}
                            <span className="font-normal normal-case">{celular}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha De Ingreso: {''}
                            <span className="font-normal normal-case">{fecha}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                            <span className="font-normal normal-case">{sintomas}</span>
                    </p>

                    <div className="flex justify-between mt-5 flex-wrap">
                        <button type="button"
                                className="py-2 px-10 my-1 bg-indigo-600 hover:bg-indigo-700 rounded-md
                                text-white font-bold"
                                onClick={()=>setPaciente(paciente)}
                                
                        >Editar</button>

                        <button type="button"
                                className="py-2 px-10 my-1 bg-red-600 hover:bg-red-700 rounded-md
                                text-white font-bold"
                                onClick={handleEliminar}
                        >Eliminar</button>
                    </div>
            </div>
    )
    }

    export default Paciente;
