import { API_URL} from '@/constants'
import React from 'react'
import SelectLocation from './_components/SelectLocation'
import LocationCard from './_components/LocationCard'
import FormNewLocation from './_components/FormNewLocation'
import DeleteLocationButton from './_components/DeleteLocationButton'
import authHeaders from '@/helpers/authHeaders'
import UpdateLocation from './_components/UpdateLocation'
import FormUpdateLocation from './_components/FormUpdateLocation'
import { getUserRoles } from '@/helpers/getUserRoles'

const LocationsPage = async ({searchParams} : {searchParams: {[key: string] : string | string[] | undefined}}) => {
  const userRole = getUserRoles()
  const response = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }, 
    next: {
      tags: ["dashboard:locations"]
    }
  })
  const locationsData = await response.json()
  return (
    <div className='w-5/12'>
      <div className='w-full flex flex-col items-center h-[90vh]'>
        <div className='w-1/2 my-10'>
          <SelectLocation locations={locationsData} store={searchParams.store}/>
        </div>
        <div className='w-8/12 flex justify-center'>
          <div className='w-full'>
            {searchParams.store ? (
              <>
                <LocationCard store={searchParams.store}/>
                {userRole[0] !== "Employee" && (
                  <div className='w-full flex justify-end mt-5 gap-5'>
                    <DeleteLocationButton store={searchParams.store}/>
                    <UpdateLocation>
                      <FormUpdateLocation store={searchParams.store}/>
                    </UpdateLocation>
                  </div>
                )}
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