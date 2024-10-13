import { Button, Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='bg-sun-700 bg-amber-400 p-10 rounded-md md:w-[400px] shadow-2xl'>
            <div className='flex justify-start'>
                <h2 className='font-bold text-lg text-rose-800'>Please enter you details</h2>
            </div>
            <div className='flex flex-col gap-5 my-5'>
                <Input label="Email" type='email' isRequired={true} size='sm'/>
                <Input label="Password" type='password' isRequired={true} size='sm'/>
            </div>
            <div className='w-full flex flex-col justify-end'>
                <Button className='bg-rose-700 text-white'>
                    Login
                </Button>
                <div className='mt-3'>
                    <p className='text-rose-800'>
                        Don't have an account? <Link href={"/signup"}><span className='text-white hover:text-rose-500'>Sign Up!</span></Link>
                    </p>
                </div>
            </div>
            
        </div>
      )
}

export default Login