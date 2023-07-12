import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() =>{
            if (Object.keys(paciente).length > 0) {
                setMascota(paciente.mascota)
                setPropietario(paciente.propietario)
                setEmail(paciente.email)
                setCelular(paciente.celular)
                setFecha(paciente.fecha)
                setSintomas(paciente.sintomas)
            }
    }, [paciente]);


    const generarId = () =>{
        //Codigos para generar Id's Unicos
        const random1 = Math.random().toString(15);
        const random2 = Date.now().toString(15);

        return random1+random2
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion del form
        if( [mascota,propietario,email,celular,fecha,sintomas].includes('') ) {

            setError(true);
            return;
        }

        setError(false);

        //Objeto de paciente
        const objetoPaciente = {
            mascota,
            propietario,
            email,
            celular,
            fecha,
            sintomas,
        }

        if (paciente.id) {
            //Editando Registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
            paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})


        } else {
            //Nuevo Registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        

        //Reiniciar Form
        setMascota('');
        setPropietario('');
        setEmail('');
        setCelular('');
        setFecha('');
        setSintomas('');

    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p  className="text-lg mt-5 text-center mb-6">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-5 px-5 mb-10" onSubmit={handleSubmit}>

            {error && <Error><p>Todos los campos deben completarse</p></Error>}

                <div className="mb-5">
                    <label  className="block text-gray-700 font-bold uppercase" htmlFor="mascota" >Nombre Mascota</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre De La Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={mascota}
                        onChange={ (e) => setMascota(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label  className="block text-gray-700 font-bold uppercase" htmlFor="propietario" >Nombre Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre Del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label  className="block text-gray-700 font-bold uppercase" htmlFor="email" >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label  className="block text-gray-700 font-bold uppercase" htmlFor="celular" >Celular</label>
                    <input
                        id="celular"
                        type="number"
                        placeholder="Numero de Celular"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={celular}
                        onChange={ (e) => setCelular(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label  className="block text-gray-700 font-bold uppercase" htmlFor="alta" >Fecha de Alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label  className="block text-gray-700 font-bold uppercase" htmlFor="sintomas" >Sintomas</label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        placeholder="Describe los Sintomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full uppercase text-white font-bold rounded-md p-2
                    hover:bg-indigo-700 cursor-pointer transition-color"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario;
