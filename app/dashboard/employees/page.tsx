import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import EmployeeCard from './_components/EmployeeCard'

const EmployeesPage = async () => {
  const response = await fetch(`${API_URL}/employees`, {
    headers: {
      ...authHeaders()
    },
    next: {
      tags: ["dashboard:employees"]
    }
  }
  )
  const employees : Employee[] = await response.json()

  return (
    <div className='w-full flex items-center justify-center mx-20'>
      <div className='w-full grid grid-cols-6 gap-x-10'>
        {employees.map((employee) => (
          <EmployeeCard employee={employee} full={false} hover={true} main={false}/>
        ))}</div>
    </div>
  )
}

export default EmployeesPage