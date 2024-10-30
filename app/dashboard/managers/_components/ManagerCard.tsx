import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const ManagerCard = ({manager, full, hover, main} : {manager: Manager, full: boolean, hover: boolean, main: boolean}) => {
  return (
    <Card className={`m-10 text-center ${hover ? "hover:scale-110 hover:bg-rose-200" : ""} ${main ? "text-3xl h-[40vh] my-5" : ""}`} key={manager.managerId}>
        <CardHeader>
            <Link className=' w-full text-center' href={`/dashboard/managers/${manager.managerId}`}>
              <p className={`w-full text-black`}><b>{manager.managerFullName}</b></p>
            </Link>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Email: <b>{manager.managerEmail}</b></p>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Telefono: <b>{manager.managerPhoneNumber}</b></p>
            {full && (
              <>
                <Link href={`/dashboard?store=${manager.location?.locationId}`}>
                  <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Tienda: <b className='hover:underline'>{manager.location?.locationName}</b></p>
                </Link>
                <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Salario: <b>{manager.managerSalary}</b></p>
              </>
            )}
        </CardBody>
    </Card>
  )
}

export default ManagerCard