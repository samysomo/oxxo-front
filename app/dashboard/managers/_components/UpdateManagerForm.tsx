import { API_URL } from '@/constants'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import authHeaders from '@/helpers/authHeaders'
import { updateManager } from '@/actions/managers/update'
import SelectStore from './SelectStore'

const UpdateManagerForm = async({manager} : {manager : Manager}) => {

  const responseLocations = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }, next: {
      tags: ["dashboard:locations"]
    }
  })
  const locationsData : LocationEntity[] = await responseLocations.json()

  const updateWithManagerId = updateManager.bind(null, manager.managerId)
 
  return (
    <form action={updateWithManagerId} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Actualizar Manager</h1>
      <Input required={true} defaultValue={manager.managerFullName} label="Nombre" name='managerFullName' placeholder='Samuel Serrato'/>
      <Input required={true} defaultValue={manager.managerEmail} label="Email" name='managerEmail' placeholder='correo@correo.copm'/>
      <Input required={true} defaultValue={manager.managerPhoneNumber} label="Telefono" name='managerPhoneNumber' placeholder='442123123'/>
      <Input required={true} defaultValue={manager.managerSalary.toString()} label="Salario" name='managerSalary' placeholder='70000'/>
      <SelectStore stores={locationsData} defaultStore={manager.location?.locationId} notDisabled={false}/>
      <Button className='bg-rose-700 text-white' type="submit">Actualizar Manager</Button>
    </form>
  )
}

export default UpdateManagerForm