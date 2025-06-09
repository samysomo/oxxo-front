
import EmployeesLocation from './@locations/_components/EmployeesLocation'
import { getUserRoles } from '@/helpers/getUserRoles'

const Dashboard = ({searchParams} : {searchParams: {[key: string] : string | string[] | undefined}}) => {
  const userRole = getUserRoles()
  return (
    <>
        <div className='h-full w-5/12 bg-rose-300'>
          <div className='h-[90vh] overflow-hidden overflow-y-auto flex flex-col'>
            {searchParams.store ? (
              <EmployeesLocation store={searchParams?.store}/>
            ) : (
              <h2 className='text-3xl text-center font-bold mt-10'>Selecciona una tienda {userRole[0] !== "Employee" && "para ver los empleados"} </h2>
            )}
            
          </div>
        </div>
    </>
  )
}

export default Dashboard