import React from 'react'
import { LuPopsicle, LuStore, LuTruck, LuUser, LuUsers } from 'react-icons/lu'
import NavItem from './NavItem'

const Sidebar = () => {
  return (
    <nav className='w-[15vw] h-[90vh] bg-rose-500 flex flex-col items-center py-20 gap-10'>
        <NavItem icon={<LuStore size={"4em"} className='p-2'/>} path='/dashboard' name='Home'/>
        <NavItem icon={<LuPopsicle size={"4em"} className='p-2'/>}  path='/dashboard/products' name='Products'/>
        <NavItem icon={<LuTruck size={"4em"} className='p-2'/>}  path='/dashboard/providers' name='Providers'/>
        <NavItem icon={<LuUser size={"4em"} className='p-2'/>}  path='/dashboard/managers' name='Managers'/>
        <NavItem icon={<LuUsers size={"4em"} className='p-2'/>}  path='/dashboard/employees' name='Employees'/>
    </nav>
  )
}

export default Sidebar