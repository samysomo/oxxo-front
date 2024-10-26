import { API_URL, TOKEN_NAME } from '@/constants'
import { Select, SelectItem } from '@nextui-org/react'
import axios from 'axios'
import { cookies } from 'next/headers'
import React from 'react'
import SelectLocation from './_components/SelectLocation'
import LocationCard from './_components/LocationCard'
import FormNewLocation from './_components/FormNewLocation'
import DeleteLocationButton from './_components/DeleteLocationButton'
import authHeaders from '@/helpers/authHeaders'

const LocationsPage = async ({searchParams} : {searchParams: {[key: string] : string | string[] | undefined}}) => {
  const {data} = await axios.get<LocationEntity[]>(`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }
  })
  return (
    <div className='w-5/12'>
      <div className='w-full flex flex-col items-center h-[90vh]'>
        <div className='w-1/2 my-10'>
          <SelectLocation locations={data} store={searchParams.store}/>
        </div>
        <div className='w-8/12 flex justify-center'>
          <div className='w-full'>
            {searchParams.store ? (
              <>
                <LocationCard store={searchParams.store}/>
                <div className='w-full flex justify-end mt-5'>
                  <DeleteLocationButton store={searchParams.store}/>
                </div>
              </>
              
            ) : (
              <FormNewLocation/>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationsPage