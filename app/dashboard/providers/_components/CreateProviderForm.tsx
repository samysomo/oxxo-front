
import { Button, Input } from '@nextui-org/react'
import { createProvider } from '@/actions/providers/create'

const CreateProviderForm = () => {

  const createProviderAction = createProvider.bind(null)
 
  return (
    <form action={createProviderAction} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Agregar Proveedor</h1>
      <Input required={true} label="Nombre del proveedor" name='providerName' placeholder='Empresa'/>
      <Input required={true} label="Correo del proveedor" name='providerEmail' placeholder='correo@correo.copm'/>
      <Input required={true} label="Telefono del proveedor" name='providerPhoneNumber' placeholder='442123123'/>
      <Button className='bg-rose-700 text-white' type="submit">Agregar Proveedor</Button>
    </form>
  )
}

export default CreateProviderForm