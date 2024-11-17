import { createEmployee } from '@/actions/employee/create'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import SelectStore from '../../managers/_components/SelectStore'
import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'

const CreateEmployeeForm = async() => {
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {...authHeaders()},
        next: {
          tags: ["dashboard:locations"]
        }
    })
    const stores = await responseStores.json()
  const createWithEmployeeId = createEmployee.bind(null)
 
  return (
    <form action={createWithEmployeeId} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Crear Empleado</h1>
      <Input isRequired={true} label="Nombre" name='employeeName'/>
      <Input isRequired={true} label="Apellido" name='employeeLastName'/>
      <Input isRequired={true} label="Email" name='employeeEmail'/>
      <Input isRequired={true} label="Telefono" name='employeePhoneNumber'/>
      <SelectStore stores={stores} notDisabled={true}/>
      <Input type='file' label="Foto" name='employeePhoto' className='text-black'/>
      <Button className='bg-rose-700 text-white' type="submit">Crear Empleado</Button>
    </form>
  )
}

export default CreateEmployeeForm