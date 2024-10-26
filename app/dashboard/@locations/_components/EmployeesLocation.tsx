import { API_URL, TOKEN_NAME } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'

const EmployeesLocation = async ({store} : {store: string | string[] | undefined}) => {
    const response = await fetch(`${API_URL}/employees/location/${store}`, {
        method: "GET",
        headers : {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations:employees"]
        }
    })
    const data : Employee[] = await response.json()
    if(!data) return null
    
  return (
    <div>
        {data.map((employee : Employee) => { 
            const fullName = employee.employeeName + " " + employee.employeeLastName
        return(
            <Card className='m-10' key={employee.employeeId}>
                <CardHeader>
                    <p className='w-full text-black'>Name: <b>{fullName}</b></p>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p className='w-full text-black'>Email: <b>{employee.employeeEmail}</b></p>
                    <p className='w-full text-black'>Number: <b>{employee.employeePhoneNumber}</b></p>
                </CardBody>
            </Card>
        )})}
    </div>
  )
}

export default EmployeesLocation