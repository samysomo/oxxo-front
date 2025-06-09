import { Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import Link from 'next/link'
import UpdateManagerModal from './UpdateManagerModal'
import UpdateManagerForm from './UpdateManagerForm'
import RegisterManagerModal from './RegisterManagerModal'
import RegisterManagerForm from './RegisterManagerForm'
import ChangeManagerPasswordModal from './ChangeManagerPasswordModal'
import ChangeManagerPasswordForm from './ChangeManagerPasswordForm'
import DeleteManagerButton from './DeleteManagerButton'
import { getUserRoles } from '@/helpers/getUserRoles'

const ManagerCard = ({manager, full, hover, main} : {manager: Manager, full: boolean, hover: boolean, main: boolean}) => {
  const userRole = getUserRoles()
  return (
    <Card className={`m-10 text-center ${hover ? "hover:scale-110 hover:bg-rose-200" : ""} ${main ? "text-3xl h-[40vh] w-[550px] my-5" : ""}`} key={manager.managerId}>
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
        <CardFooter className='flex gap-5 justify-end'>
          {main && (
            <>
              <UpdateManagerModal>
                <UpdateManagerForm manager={manager}/>
              </UpdateManagerModal>
              {!manager.user ? (
                <RegisterManagerModal>
                  <RegisterManagerForm id={manager.managerId} email={manager.managerEmail}/>
                </RegisterManagerModal>
              ) : (
                <ChangeManagerPasswordModal>
                  <ChangeManagerPasswordForm id={manager.user.userId} email={manager.managerEmail}/>
                </ChangeManagerPasswordModal>
              )}
              {userRole[0] === "Admin" && (
                <DeleteManagerButton id={manager.managerId}/>
              )}
            </>
          )}
          
        </CardFooter>
    </Card>
  )
}

export default ManagerCard