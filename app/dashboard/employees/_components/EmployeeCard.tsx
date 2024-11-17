import { Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UpdateEmployeeModal from './UpdateEmployeeModal'
import UpdateEmployeeForm from './UpdateEmployeeForm'
import DeleteEmployeeModal from './DeleteEmployeeModal'
import DeleteEmployeeForm from './DeleteEmployeeForm'

const EmployeeCard = ({employee, full, hover, main} : {employee: Employee, full: boolean, hover: boolean, main: boolean}) => {
  return (
    <Card className={`m-6 w-[200px] text-center ${hover ? "hover:scale-110 hover:bg-rose-200" : ""} ${main ? "text-3xl h-[50vh] w-[550px] my-5" : ""}`} key={employee.employeeId}>
        <CardHeader className=''>
          <Link className=' w-full text-center' href={`/dashboard/employees/${employee.employeeId}`}>
            <p className={`w-full text-black`}><b>{employee.employeeName + " " + employee.employeeLastName}</b></p>
          </Link>
          {employee.employeePhoto &&
            <Link className={` w-full text-center flex justify-end`} href={`/dashboard/employees/${employee.employeeId}`}>
                <Image
                    src={employee.employeePhoto}
                    alt='Employee Photo'
                    height={main ? 150 : 72}
                    width={main ? 150 : 72}
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
        {main && (
          <CardFooter className='flex gap-5 justify-end'>
            <UpdateEmployeeModal>
              <UpdateEmployeeForm employee={employee}/>
            </UpdateEmployeeModal>
            <DeleteEmployeeModal>
              <DeleteEmployeeForm employee={employee}/>
            </DeleteEmployeeModal>
          </CardFooter>
        )}
    </Card>
  )
}

export default EmployeeCard