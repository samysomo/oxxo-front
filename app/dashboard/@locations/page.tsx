import { TOKEN_NAME } from '@/constants'
import { Select, SelectItem } from '@nextui-org/react'
import axios from 'axios'
import { cookies } from 'next/headers'
import React from 'react'
import SelectLocation from './_components/SelectLocation'

const LocationsPage = async () => {
  const userCookies = cookies()
  const token = userCookies.get(TOKEN_NAME)?.value
  const {data} = await axios.get<LocationEntity[]>("http://localhost:4000/locations", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return (
    <div className='w-5/12'>
      <div className='w-full flex flex-col items-center h-[90vh]'>
        <div className='w-1/2 my-10'>
          <SelectLocation locations={data}/>
        </div>
      </div>
    </div>
  )
}

export default LocationsPage