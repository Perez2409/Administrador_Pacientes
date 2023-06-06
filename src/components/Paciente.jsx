    const Paciente = ({paciente}) => {
        const{mascota, propietario, email, celular, fecha, sintomas} = paciente;

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

                    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha De Salida: {''}
                            <span className="font-normal normal-case">{fecha}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                            <span className="font-normal normal-case">{sintomas}</span>
                    </p>

            </div>
    )
    }

    export default Paciente;
