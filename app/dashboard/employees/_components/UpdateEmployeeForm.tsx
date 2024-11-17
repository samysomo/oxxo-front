import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { updateEmployee } from '@/actions/employee/update'
import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import SelectStore from '../../managers/_components/SelectStore'

const UpdateEmployeeForm = async({employee} : {employee : Employee}) => {
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {...authHeaders()},
    next: {
      tags: ["dashboard:locations"]
    }
  })
  const stores = await responseStores.json()
  const updateWithEmployeeId = updateEmployee.bind(null, employee.employeeId)
 
  return (
    <form action={updateWithEmployeeId} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Actualizar Empleado</h1>
      <Input defaultValue={employee.employeeName} label="Nombre" name='employeeName'/>
      <Input defaultValue={employee.employeeLastName} label="Apellido" name='employeeLastName'/>
      <Input defaultValue={employee.employeeEmail} label="Email" name='employeeEmail'/>
      <Input defaultValue={employee.employeePhoneNumber} label="Telefono" name='employeePhoneNumber'/>
      <SelectStore stores={stores} notDisabled={true} defaultStore={employee.location?.locationId}/>
      <Input type='file' defaultValue={employee.employeePhoto} label="Foto" name='employeePhoto' className='text-black'/>
      <Button className='bg-rose-700 text-white' type="submit">Actualizar Empleado</Button>
    </form>
  )
}

export default UpdateEmployeeForm