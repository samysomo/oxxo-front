import { API_URL, TOKEN_NAME } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const LocationCard = async ({store}: {store: string | string[] | undefined}) => {
    const {data} = await axios.get<LocationEntity>(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        }
    })
    if (!data) return null
  return (
    <Card>
        <CardHeader>
            <b className='w-full text-black'>{data.locationName}</b>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p className='w-full text-black'>Manager: <Link href={"/dashboard/managers"}><b>{data.manager?.managerFullName}</b></Link></p>
            <p className='w-full text-black'>Manager: <b>{data.locationAddress}</b></p>
        </CardBody>
    </Card>
  )
}

export default LocationCard