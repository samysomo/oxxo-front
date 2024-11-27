import deleteManager from '@/actions/managers/delete'
import { Button } from '@nextui-org/react'
import React from 'react'
import { LuTrash2 } from 'react-icons/lu'

const DeleteManagerButton = ({id} : {id: string | string[]}) => {
  return (
    <form action={deleteManager}>
        <Button 
            className='bg-rose-700 text-white font-bold'
            name='deleteValue'
            value={id}
            type='submit'
        >
        Eliminar <LuTrash2/>
    </Button>
    </form>
    
  )
}

export default DeleteManagerButton