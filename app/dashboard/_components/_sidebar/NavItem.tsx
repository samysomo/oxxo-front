"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
    icon: React.ReactNode,
    path: string,
    name: string
}

const NavItem = ({icon, path, name}: NavItemProps) => {
    const pathname = usePathname()
  return (
    <Link href={path} className={pathname === path ? "bg-rose-700 w-full flex max-lg:justify-center transition-colors md:pl-8 max-lg:p-2" : "w-full flex md:pl-2 max-lg:justify-center"}>
        <div className='flex items-center max-lg:justify-center'>
            <div className="">{icon}</div>
            <span className='p-3 font-bold text-lg max-lg:hidden'>{name}</span>
        </div> 
    </Link>
    
  )
}

export default NavItem