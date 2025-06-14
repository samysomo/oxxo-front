import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import EmployeeCard from '../_components/EmployeeCard'

const API_URL = process.env.API_URL

const EmployeePage = async ({params} : {params: {id : string}}) => {
  const response = await fetch(`${API_URL}/employees/${params.id}`, {
    headers: {...authHeaders()},
    next: {
      tags: [`dashboard:employees:${params.id}`, "dashboard:employees"]
    }
  })
  const employeeData : Employee = await response.json()
  return (
    <div className='w-10/12 h-[90vh] flex items-center justify-center'>
      <EmployeeCard userRole="employee" employee={employeeData} main={true} hover={false} full={true}/>
    </div>
  )
}

export default EmployeePage