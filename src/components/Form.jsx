import React, { useId, useState, useEffect } from 'react'
import Error from './Error'

function Form ({ setPacientes, pacientes, paciente, setPaciente }) {
  const mascotaID = useId()
  const propietarioID = useId()
  const emailID = useId()
  const deAltaID = useId()
  const sintomasID = useId()

  const [name, setName] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [deAlta, setDeAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setName(paciente.name)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setDeAlta(paciente.deAlta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generatorId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([name, propietario, email, deAlta, sintomas].includes('')) {
      setError(true)
      return
    }
    setError(false)

    const objectPacientes = {
      name,
      propietario,
      email,
      deAlta,
      sintomas
    }

    if (paciente.id) {
      objectPacientes.id = paciente.id
      const pacientesUpdate = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objectPacientes : pacienteState)
      setPacientes(pacientesUpdate)
      setPaciente({})
    } else {
      objectPacientes.id = generatorId()
      setPacientes([...pacientes, objectPacientes])
    }

    setName('')
    setPropietario('')
    setEmail('')
    setDeAlta('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Paciente</h2>

      <p className='text-lg mt-5 mb-10 ml-4 text-center'>
        Añade pacientes y
        <span className='text-indigo-600 font-bold'> Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

        {error && <Error>Todos los campos son obligatorios</Error>}

        <div className='mb-5'>
          <label htmlFor={mascotaID} className='block text-gray-700 uppercase font-bold'>Nombre de la mascota</label>
          <input
            id={mascotaID}
            onChange={(e) => setName(e.target.value)}
            value={name}
            type='text'
            placeholder='Mike, Taylor, etc...'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor={propietarioID} className='block text-gray-700 uppercase font-bold'>Nombre del propietario</label>
          <input
            id={propietarioID}
            onChange={(e) => setPropietario(e.target.value)}
            value={propietario}
            type='text'
            placeholder='Jorge, Juan, etc...'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor={emailID} className='block text-gray-700 uppercase font-bold'>E-mail</label>
          <input
            id={emailID}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='example@example.com'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor={deAltaID} className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input
            id={deAltaID}
            onChange={(e) => setDeAlta(e.target.value)}
            value={deAlta}
            type='date'
            className='border-2 w-full p-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor={sintomasID} className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea
            id={sintomasID}
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
            className='border-2 w-full p-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
            placeholder='Describe los sintomas'
          />
        </div>

        <button
          type='submit'
          className='bg-indigo-600 w-full p-2 mt-5 uppercase rounded-md text-white font-bold hover:bg-indigo-700 transition duration-300 ease-in-out'
        >{paciente.id ? 'Editar' : 'Agregar'}
        </button>
      </form>
    </div>
  )
}

export default Form
