import { API_URL} from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import { getUserRoles } from '@/helpers/getUserRoles'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const LocationCard = async ({store}: {store: string | string[] | undefined}) => {
    const userRole = getUserRoles()
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`]
        }
    })
    const storeData : LocationEntity = await response.json()
    if (!storeData) return null
  return (
    <Card>
        <CardHeader>
            <b className='w-full text-black'>{storeData.locationName}</b>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p className='w-full text-black'>Manager: <Link href={userRole[0] === "Employee" ? "" : `/dashboard/managers/${storeData.manager?.managerId}`}><b className='hover:underline'>{storeData.manager?.managerFullName}</b></Link></p>
            <p className='w-full text-black'>Address: <b>{storeData.locationAddress}</b></p>
        </CardBody>
    </Card>
  )
}

export default LocationCard