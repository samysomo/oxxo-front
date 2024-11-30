"use client"
import React, { useState, useEffect } from 'react'
import EmployeeCard from './EmployeeCard'
import { Select, SelectItem } from '@nextui-org/react'
import { getUserRolesClient } from '@/helpers/decodeTokenClient'

const EmployeeList = ({employees, locations} : {employees : Employee[], locations : LocationEntity[]}) => {
    const [store, setStore] = useState("")
    const [userRole, setUserRole] = useState("")
    useEffect(() => {
      const getRole = () => {
        const role = getUserRolesClient()
        setUserRole(role[0])
      }
      getRole()
    }, [])
  return (
    <div className=''>
        <div className='w-full h-[150px] flex items-center justify-center'>
            <Select 
                className='w-[500px]' 
                placeholder='Selecciona una tienda' 
                defaultSelectedKeys={[]}
                classNames={{
                mainWrapper: "hover:ring-2 ring-rose-400 rounded-xl transition-all"
                }}
                label="Tienda"
                onChange={((e) =>{
                    setStore(e.target.value)
                })}
            >
                {locations.map((location: LocationEntity) => (
                    <SelectItem key={location.locationId} value={location.locationId} className='text-black'>
                        {location.locationName}
                    </SelectItem>
                ))}
            </Select>
        </div>      
        <div className='w-full grid grid-cols-5'>
            {employees
                .filter((employee : Employee) => store === "" ? true : (employee.location?.locationId.toString() === store))
                .map((employee) => (
                    <EmployeeCard key={employee.employeeId} employee={employee} full={false} hover={true} main={false} userRole={userRole}/>
            ))}
        </div>
    </div>
    
  )
}

export default EmployeeList