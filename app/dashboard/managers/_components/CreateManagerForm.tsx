import { API_URL } from '@/constants'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import authHeaders from '@/helpers/authHeaders'
import { createManager } from '@/actions/managers/create'
import SelectStore from './SelectStore'

const CreateManagerForm = async() => {

  const responseLocations = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }, next: {
      tags: ["dashboard:locations", "dashboard:locations:managers"]
    }
  })
  const locationsData : LocationEntity[] = await responseLocations.json()
  return (
    <form action={createManager} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Crear Manager</h1>
      <Input required={true} label="Nombre" name='managerFullName' placeholder='Samuel Serrato'/>
      <Input required={true} label="Email" name='managerEmail' placeholder='correo@correo.com'/>
      <Input required={true} label="Telefono" name='managerPhoneNumber' placeholder='442123123'/>
      <Input required={true} label="Salario" name='managerSalary' placeholder='70000'/>
      <SelectStore stores={locationsData} notDisabled={false}/>
      <Button className='bg-rose-700 text-white' type="submit">Crear Manager</Button>
    </form>
  )
}

export default CreateManagerForm