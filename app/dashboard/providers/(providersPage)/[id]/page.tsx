import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import ProviderCard from '../../_components/ProviderCard'
import UpdateProviderModal from '../../_components/UpdateProviderModal'
import UpdateProviderForm from '../../_components/UpdateProviderForm'
import DeleteProviderModal from '../../_components/DeleteProviderModal'
import DeleteProviderForm from '../../_components/DeleteProviderButton'
import { getUserRoles } from '@/helpers/getUserRoles'

const ProviderPage = async({params} : {params: {id : string}}) => {
  const userRole = getUserRoles()
  const response = await fetch(`${API_URL}/providers/${params.id}`, {
    headers: {...authHeaders()},
    next: {
      tags: [`dashboard:providers:${params.id}`, "dashboard:providers"]
    }
  })
  const providerData : Provider = await response.json()
  return (
    <div className='w-full flex flex-col h-[50vh]'>
      <div>
        <ProviderCard provider={providerData} full={true} hover={false} main={true}/>
      </div>
      {userRole[0] !== "Employee" && (
        <div className='w-full flex justify-end px-10 py-5 gap-5'>
          <UpdateProviderModal>
            <UpdateProviderForm provider={providerData}/>
          </UpdateProviderModal>
          <DeleteProviderModal>
            <DeleteProviderForm provider={providerData}/>
          </DeleteProviderModal>
        </div>
      )}
      
    </div>
  )
}

export default ProviderPage