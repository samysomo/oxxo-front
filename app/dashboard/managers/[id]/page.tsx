import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import ManagerCard from '../_components/ManagerCard'
import DeleteManagerButton from '../_components/DeleteManagerButton'
import UpdateManagerModal from '../_components/UpdateManagerModal'
import UpdateManagerForm from '../_components/UpdateManagerForm'

const ManagerPage = async ({params} : {params: {id : string}}) => {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {...authHeaders()},
    next: {
      tags: [`dashboard:managers:${params.id}`, "dashboard:managers"]
    }
  })
  const managerData : Manager = await response.json()
  return (
    <div className='w-full flex flex-col h-[50vh]'>
      <div>
        <ManagerCard manager={managerData} full={true} hover={false} main={true}/>
      </div>
      <div className='w-full flex justify-end px-10 py-5 gap-5'>
        <UpdateManagerModal>
          <UpdateManagerForm manager={managerData}/>
        </UpdateManagerModal>
        <DeleteManagerButton id={managerData.managerId}/>
      </div>
    </div>
  )
}

export default ManagerPage