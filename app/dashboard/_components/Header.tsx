import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full h-[10vh] bg-rose-500 flex items-center px-10' >
        <Image 
            src={"/oxxo-logo.svg"}
            alt='Logo Oxxo'
            width={100}
            height={50}
        />
        
    </div>
  )
}

export default Header