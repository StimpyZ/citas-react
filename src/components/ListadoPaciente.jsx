import Pacientes from './Pacientes'

function ListadoPaciente ({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {pacientes && pacientes.length
        ? (
          <>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

            <p className='text-lg mt-5 mb-10 ml-4 text-center'>
              Administra tus
              <span className='text-indigo-600 font-bold'>
                {' '}
                Pacientes y citas
              </span>
            </p>
            <div className='flex flex-col gap-6 max-h-[645px] md:overflow-y-scroll snap-mandatory'>
              {pacientes?.map((paciente) => (
                <Pacientes
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
            </div>
          </>
          )
        : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-lg mt-5 mb-10 ml-4 text-center'>
              Comienza agregando pacientes
              <span className='text-indigo-600 font-bold'>
                {' '}
                y apareceran en este lugar
              </span>
            </p>
          </>
          )}
    </div>
  )
}

export default ListadoPaciente
