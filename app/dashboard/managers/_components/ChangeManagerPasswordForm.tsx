"use client"
import { createEmployee } from '@/actions/employee/create'
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { LuEye, LuLock } from 'react-icons/lu'
import { generate } from 'generate-password'
import updateEmployeeUser from '@/actions/employee/users/update-employee'
import updateManagerUser from '@/actions/managers/users/updateManagerUser'

const ChangeManagerPasswordForm = ({id, email} : {id : string, email : string}) => {
  const [userEmail, setUserEmail] = useState(email)
  const [password, setPassword] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const changeManagerPassword = updateManagerUser.bind(null, id)
 
  return (
    <form action={changeManagerPassword} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Cambiar contraseña</h1>
      <Input isRequired={true} value={userEmail} label="Email" name='userEmail'/>
      <Input isRequired={true} 
        label="Password" 
        name='userPassword' 
        type={isVisible ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        endContent={<button type='button' onMouseDown={() => setIsVisible(true)} onMouseUp={() => setIsVisible(false)}>
          <LuEye className='text-black' size="25"/>
        </button>}
      />
      <div className='flex justify-between items-center'>
        <h2>Generar contraseña segura</h2>
        <Button className='bg-amber-300 text-white' type="button" onPress={() => setPassword(
          generate({length : 10})
        )}>
          <LuLock size="25"/>
        </Button>
      </div>
      <Button className='bg-rose-700 text-white' type="submit">Cambiar</Button>
    </form>
  )
}

export default ChangeManagerPasswordForm