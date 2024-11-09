import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EmployeeCard = ({employee, full, hover, main} : {employee: Employee, full: boolean, hover: boolean, main: boolean}) => {
  return (
    <Card className={`m-6 w-[180px] text-center ${hover ? "hover:scale-110 hover:bg-rose-200" : ""} ${main ? "text-3xl h-[40vh] my-5" : ""}`} key={employee.employeeId}>
        <CardHeader>
            <Link className=' w-full text-center' href={`/dashboard/employees/${employee.employeeId}`}>
              <p className={`w-full text-black`}><b>{employee.employeeName + " " + employee.employeeLastName}</b></p>
            </Link>
            {employee.employeePhoto &&
                <Link className=' w-full text-center' href={`/dashboard/employees/${employee.employeeId}`}>
                    <Image
                        src={employee.employeePhoto}
                        alt='Employee Photo'
                        height={72}
                        width={72}
                    />
                </Link>
            }
        </CardHeader>
        <Divider/>
        <CardBody>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Email: <b>{employee.employeeEmail}</b></p>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Telefono: <b>{employee.employeePhoneNumber}</b></p>
            {full && (
              <>
                <Link href={`/dashboard?store=${employee.location?.locationId}`}>
                  <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Tienda: <b className='hover:underline'>{employee.location?.locationName}</b></p>
                </Link>
              </>
            )}
        </CardBody>
    </Card>
  )
}

export default EmployeeCard