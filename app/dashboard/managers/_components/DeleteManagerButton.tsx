import deleteManager from '@/actions/managers/delete'
import { Button } from '@nextui-org/react'
import React from 'react'

const DeleteManagerButton = ({id} : {id: string | string[]}) => {
  return (
    <form action={deleteManager}>
        <Button 
            className='bg-rose-700 text-white font-bold'
            name='deleteValue'
            value={id}
            type='submit'
        >
        Eliminar Manager
    </Button>
    </form>
    
  )
}

export default DeleteManagerButton