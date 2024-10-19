import React from 'react'
import EmployeesLocation from './@locations/_components/EmployeesLocation'

const Dashboard = ({searchParams} : {searchParams: {[key: string] : string | string[] | undefined}}) => {
  return (
    <>
        <div className='h-full w-5/12 bg-rose-300'>
            <EmployeesLocation/>
        </div>
    </>
  )
}

export default Dashboard