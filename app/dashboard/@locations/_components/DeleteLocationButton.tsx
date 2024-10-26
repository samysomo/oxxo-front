import deleteLocation from '@/actions/locations/delete'
import { Button } from '@nextui-org/react'
import { form } from 'framer-motion/client'
import React from 'react'

const DeleteLocationButton = ({store} : {store: string | string[]}) => {
  return (
    <form action={deleteLocation}>
        <Button 
            className='bg-rose-700 text-white font-bold'
            name='deleteValue'
            value={store}
            type='submit'
        >
        Eliminar Tienda
    </Button>
    </form>
    
  )
}

export default DeleteLocationButton