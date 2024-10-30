import { API_URL } from '@/constants'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import authHeaders from '@/helpers/authHeaders'
import { updateManager } from '@/actions/managers/update'

const UpdateManagerForm = async({id} : {id: string | string[] | undefined}) => {
    if(!id || id === undefined || typeof id === "object") return null

  const updateWithManagerId = updateManager.bind(null, id)
  const responseManager = await fetch(`${API_URL}/managers/${id}`, {
    headers: {
      ...authHeaders()
    }, next: {
      tags: ["dashboard:managers", `dashboard:managers:${id}`]
    }
  })
  const managerData : Manager = await responseManager.json();

  return (
    <form action={updateWithManagerId} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Actualizar Manager</h1>
      <Input required={true} defaultValue={managerData.managerFullName} label="Nombre" name='managerFullName' placeholder='Samuel Serrato'/>
      <Input required={true} defaultValue={managerData.managerEmail} label="Email" name='managerEmail' placeholder='correo@correo.copm'/>
      <Input required={true} defaultValue={managerData.managerPhoneNumber} label="Telefono" name='managerPhoneNumber' placeholder='442123123'/>
      <Input required={true} defaultValue={managerData.managerSalary.toString()} label="Salario" name='managerSalary' placeholder='70000'/>
      <Button className='bg-rose-700 text-white' type="submit">Actualizar Manager</Button>
    </form>
  )
}

export default UpdateManagerForm