import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import ProviderCard from '../../../_components/ProviderCard'
import ProviderProductCard from '../../../_components/ProviderProductCard'
import UpdateProviderModal from '../../../_components/UpdateProviderModal'
import UpdateProviderForm from '../../../_components/UpdateProviderForm'
import DeleteProviderForm from '../../../_components/DeleteProviderButton'
import DeleteProviderModal from '../../../_components/DeleteProviderModal'

const ProviderProductsPage = async({params} : {params: {id : string}}) => {
  const response = await fetch(`${API_URL}/providers/${params.id}`, {
    headers: {...authHeaders()},
    next: {
      tags: [`dashboard:providers:${params.id}`, "dashboard:providers"]
    }
  })
  const providerData : Provider = await response.json()
  return (
    <div className='w-full flex flex-col h-full'>
        <div className='flex w-10/12'>
            <div className='w-[500px]'>
                <ProviderCard provider={providerData} full={true} hover={false} main={true}/>
            </div>
            <div className='flex gap-5 flex-col mt-5'>
                <UpdateProviderModal>
                    <UpdateProviderForm provider={providerData}/>
                </UpdateProviderModal>
                <DeleteProviderModal>
                  <DeleteProviderForm provider={providerData}/>
                </DeleteProviderModal>
            </div>
        </div>
      <div className='h-1 bg-rose-500 m-5 w-11/12'></div>
      <div className='w-full grid grid-cols-6 overflow-hidden overflow-y-auto mx-5'>
        {providerData.products?.map((product : Product) => (
            <ProviderProductCard product={product} main={false} hover={true} key={product.productId}/>
        ))}
      </div>
    </div>
  )
}

export default ProviderProductsPage