import React from 'react'

export default function Pacientes ({ paciente, setPaciente, eliminarPaciente }) {
  const { name, email, deAlta, sintomas, propietario, id } = paciente

  const handleDelete = () => {
    // eslint-disable-next-line no-undef
    const response = confirm('¿Estas seguro de eliminar este paciente?')
    if (response) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className='flex flex-col gap-3 bg-white shadow-md px-5 py-10 rounded-xl mx-8'>
      <div>
        <p className='font-bold mb-3 text-indigo-600 uppercase'>Nombre de la mascota:
          <span className='font-normal normal-case text-gray-700'> {name}</span>
        </p>
        <p className='font-bold mb-3 text-indigo-600 uppercase'>Propietario:
          <span className='font-normal normal-case text-gray-700'> {propietario}</span>
        </p>

        <p className='font-bold mb-3 text-indigo-600 uppercase'>Email:
          <span className='font-normal normal-case text-gray-700'> {email}</span>
        </p>

        <p className='font-bold mb-3 text-indigo-600 uppercase'>Fecha de alta:
          <span className='font-normal normal-case text-gray-700'> {deAlta}</span>
        </p>

        <p className='font-bold mb-3 text-indigo-600 uppercase'>Sintomas:
          <span className='font-normal normal-case text-gray-700'> {sintomas}</span>
        </p>
      </div>
      <div className='flex gap-8'>
        <button onClick={() => setPaciente(paciente)} className='w-[140px] py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition duration-300 ease-in-out rounded-md'>Editar</button>
        <button onClick={handleDelete} className='w-[140px] py-2 bg-red-500 hover:bg-red-700 text-white font-bold transition duration-300 ease-in-out rounded-md'>Eliminar</button>
      </div>
    </div>
  )
}
