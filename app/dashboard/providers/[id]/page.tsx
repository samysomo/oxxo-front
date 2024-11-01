import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import ProviderCard from '../_components/ProviderCard'

const ProviderPage = async({params} : {params: {id : string}}) => {
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
      <div className='w-full flex justify-end px-10 py-5 gap-5'>
        {/* <UpdateProviderModal>
          <UpdateProviderForm provider={providerData}/>
        </UpdateProviderModal>
        <DeleteProviderButton id={providerData.providerId}/> */}
      </div>
    </div>
  )
}

export default ProviderPage