import deleteProvider from '@/actions/providers/delete'
import { Button } from '@nextui-org/react'
import React from 'react'

const DeleteProviderButton = ({id} : {id: string | string[]}) => {
  return (
    <form action={deleteProvider}>
        <Button 
            className='bg-rose-700 text-white font-bold w-full'
            name='deleteValue'
            value={id}
            type='submit'
        >
        Eliminar Proveedor
    </Button>
    </form>
    
  )
}

export default DeleteProviderButton