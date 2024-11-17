import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import CreateEmployeeModal from './_components/CreateEmployeeModal'
import CreateEmployeeForm from './_components/CreateEmployeeForm'
import EmployeeList from './_components/EmployeeList'

const EmployeesPage = async () => {
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
    <div className='w-full h-[90vh] flex flex-col items-center justify-start overflow-hidden overflow-y-auto'>
      <div className="absolute z-0 right-10 top-24">
        <CreateEmployeeModal>
          <CreateEmployeeForm/>
        </CreateEmployeeModal>
      </div>
      <EmployeeList employees={employees} locations={locations}/>
    </div>
  )
}

export default EmployeesPage