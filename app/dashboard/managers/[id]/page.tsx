import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import ManagerCard from '../_components/ManagerCard'
import DeleteManagerButton from '../_components/DeleteManagerButton'
import UpdateManagerModal from '../_components/UpdateManagerModal'
import UpdateManagerForm from '../_components/UpdateManagerForm'
import RegisterManagerModal from '../_components/RegisterManagerModal'
import RegisterManagerForm from '../_components/RegisterManagerForm'
import ChangeManagerPasswordModal from '../_components/ChangeManagerPasswordModal'
import ChangeManagerPasswordForm from '../_components/ChangeManagerPasswordForm'
import { getUserRoles } from '@/helpers/getUserRoles'

const ManagerPage = async ({params} : {params: {id : string}}) => {
  const userRole = getUserRoles()
  if (userRole[0] !== "Admin") return (
    <div className='w-full flex items-center justify-center h-[50vh]'>
      <h2 className='text-3xl font-bold'>No tienes acceso a esta ruta</h2>
    </div>
  )
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {...authHeaders()},
    next: {
      tags: [`dashboard:managers:${params.id}`, "dashboard:managers"]
    }
  })
  const managerData : Manager = await response.json()
  return (
    <div className='w-full flex flex-col h-[50vh]'>
      <ManagerCard manager={managerData} full={true} hover={false} main={true}/>
    </div>
  )
}

export default ManagerPage