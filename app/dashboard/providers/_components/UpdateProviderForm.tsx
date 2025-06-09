import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { updateProvider } from '@/actions/providers/update'

const UpdateProviderForm = async({provider} : {provider : Provider}) => {

  const updateWithProviderId = updateProvider.bind(null, provider.providerId)
 
  return (
    <form action={updateWithProviderId} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Actualizar Proveedor</h1>
      <Input required={true} defaultValue={provider.providerName} label="Nombre" name='providerName' placeholder='Empresa'/>
      <Input required={true} defaultValue={provider.providerEmail} label="Email" name='providerEmail' placeholder='correo@correo.copm'/>
      <Input required={true} defaultValue={provider.providerPhoneNumber} label="Telefono" name='providerPhoneNumber' placeholder='442123123'/>
      <Button className='bg-rose-700 text-white' type="submit">Actualizar Proveedor</Button>
    </form>
  )
}

export default UpdateProviderForm