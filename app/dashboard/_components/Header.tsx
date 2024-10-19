import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-screen h-[10vh] bg-rose-500 flex items-center px-10' >
        <Image 
            src={"oxxo-logo.svg"}
            alt='Logo Oxxo'
            width={100}
            height={50}
            draggable={false}
        />

        
    </div>
  )
}

export default Header