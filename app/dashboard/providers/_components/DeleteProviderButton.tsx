import deleteProvider from '@/actions/providers/delete'
import { Button } from '@nextui-org/react'

const DeleteProviderForm = ({provider} : {provider: Provider}) => {
  const deleteProviderWithId = deleteProvider.bind(null, provider.providerId)
  return (
    <form action={deleteProviderWithId}>
        <h1 className='text-center text-2xl p-5'>¿Estás seguro de eliminar al provedor <b>{provider.providerName}</b>?</h1>
        <Button 
            className='bg-rose-700 text-white font-bold w-full'
            type='submit'
        >
        Eliminar Proveedor
    </Button>
    </form>
    
  )
}

export default DeleteProviderForm