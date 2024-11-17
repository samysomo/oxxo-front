import deleteEmployee from '@/actions/employee/delete'
import { Button } from '@nextui-org/react'
import React from 'react'

const DeleteEmployeeForm = ({employee} : {employee : Employee}) => {
  const deleteEmployeeWithId = deleteEmployee.bind(null, employee.employeeId)
  return (
    <form action={deleteEmployeeWithId}>
        <h1 className='text-center text-2xl p-5'>¿Estás seguro de eliminar el empleado <b>{employee.employeeName + " " + employee.employeeLastName}</b>?</h1>
        <Button 
            className='bg-rose-700 text-white font-bold w-full'
            type='submit'
        >
        Eliminar empleado
    </Button>
    </form>
    
  )
}

export default DeleteEmployeeForm