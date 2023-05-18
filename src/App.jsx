/* eslint-disable no-undef */

import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import ListadoPaciente from './components/ListadoPaciente'

function App () {
  const [pacientes, setPacientes] = useState(() => {
    const storedPacientes = JSON.parse(localStorage.getItem('pacientes'))
    return storedPacientes || []
  })
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const handleDeletePaciente = (id) => {
    const pacientesUpdate = pacientes.filter(pacienteState => pacienteState.id !== id)
    setPacientes(pacientesUpdate)
  }
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={handleDeletePaciente}
        />
      </div>
    </div>
  )
}

export default App
