"use client"
import { API_URL } from '@/constants'
import { Button, Input, Spinner } from '@nextui-org/react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
    const [submitting, setSetsubmitting] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e : any) => {
        setSetsubmitting(true)
        e.preventDefault()
        const formData = new FormData(e.target)
        let authData : any = {}
        authData.userEmail = formData.get("userEmail")
        authData.userPassword = formData.get("userPassword")
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {...authData} , {withCredentials: true})
            if (response.status === 201) router.push("/dashboard")
        } catch (error) {
            console.log(error)
        } finally {
            setSetsubmitting(false)
        }
        return
    }
    return (
        <form className='bg-sun-700 bg-amber-400 p-10 rounded-md md:w-[400px] shadow-2xl' onSubmit={handleSubmit}>
            <div className='flex justify-start'>
                <h2 className='font-bold text-lg text-rose-800'>Please enter you details</h2>
            </div>
            <div className='flex flex-col gap-5 my-5'>
                <Input label="Email" name='userEmail' type='email' isRequired={true} size='sm'/>
                <Input label="Password" name='userPassword' type='password' isRequired={true} size='sm'/>
            </div>
            <div className='w-full flex flex-col justify-end'>
                <Button className='bg-rose-700 text-white' type='submit' disabled={submitting}>
                    {submitting ? <Spinner size='md'/> : "Login"}
                </Button>
                <div className='mt-3'>
                    <p className='text-rose-800'>
                        Don't have an account? <Link href={"/signup"}><span className='text-white hover:text-rose-500'>Sign Up!</span></Link>
                    </p>
                </div>
            </div>
            
        </form>
      )
}

export default Login