import { API_URL, TOKEN_NAME } from '@/constants'
import axios from 'axios'
import { cookies } from 'next/headers'
import React from 'react'

const EmployeesLocation = async ({store} : {store: string | string[] | undefined}) => {
    const token = cookies().get(TOKEN_NAME)?.value
    const {data} = await axios.get<Employee[]>(`${API_URL}/employees/location/1`, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    if(!data) return null
  return (
    <div>
        {data.map((employee) => (
            <div>{employee.employeeName}</div>
        ))}
    </div>
  )
}

export default EmployeesLocation