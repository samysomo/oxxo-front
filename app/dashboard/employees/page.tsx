import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import CreateEmployeeModal from './_components/CreateEmployeeModal'
import CreateEmployeeForm from './_components/CreateEmployeeForm'
import EmployeeList from './_components/EmployeeList'
import { getUserRoles } from '@/helpers/getUserRoles'
import EmployeeCard from './_components/EmployeeCard'
import { getUserEmail } from '@/helpers/getUserEmail'

const EmployeesPage = async () => {
  const userRole = getUserRoles()
  if (userRole[0] !== "Employee"){
    const responseEmployees = await fetch(`${API_URL}/employees`, {
      headers: {
        ...authHeaders()
      },
      next: {
        tags: ["dashboard:employees"]
      }
    }
    )
    const employees : Employee[] = await responseEmployees.json()
  
    const responseLocations = await fetch(`${API_URL}/locations`, {
      headers: {
        ...authHeaders()
      },
      next: {
        tags: ["dashboard:locations"]
      }
    }
    )
    const locations : LocationEntity[] = await responseLocations.json()
  
    return (
      <div className='w-10/12 h-[90vh] flex flex-col items-center justify-start overflow-hidden overflow-y-auto'>
        <div className="absolute z-0 right-10 top-24">
          <CreateEmployeeModal>
            <CreateEmployeeForm/>
          </CreateEmployeeModal>
        </div>
        <EmployeeList employees={employees} locations={locations}/>
      </div>
    )
  } else {
    const userEmail = getUserEmail()
    const responseEmployee = await fetch(`${API_URL}/employees/email/${userEmail}`, {
      headers: {
          ...authHeaders(),
      },
      next: {
          tags: ["dashboard:employees"]
      }
  })
  const employeeData : Employee = await responseEmployee.json()
    return (
      <div className='w-10/12 h-[90vh] flex items-center justify-center'>
        <EmployeeCard employee={employeeData} main={true} hover={false} full={true}/>
      </div>
    )
  }
  
}

export default EmployeesPage