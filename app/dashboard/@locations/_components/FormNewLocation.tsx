import { createLocation } from '@/actions/locations/create'
import { API_URL } from '@/constants'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import SelectManager from './SelectManager'
import authHeaders from '@/helpers/authHeaders'
import { getUserRoles } from '@/helpers/getUserRoles'

const FormNewLocation = async() => {
  const userRole = getUserRoles()

  if (userRole[0] !== "Admin" ) return null
  const responseManager = await fetch(`${API_URL}/managers`, {
    headers: {
      ...authHeaders()
    }, next: {
      tags: ["dashboard:managers"]
    }
  })
  const managersData : Manager[] = await responseManager.json();

  const responseLocations = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }, next: {
      tags: ["dashboard:locations", "dashboard:locations:managers"]
    }
  })
  const locationsData : LocationEntity[] = await responseLocations.json()
  return (
    <form action={createLocation} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full h-[500px] rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Crear tienda</h1>
      <Input required={true} label="Nombre" name='locationName' placeholder='Oxxo Juriquilla' size='sm'/>
      <Input required={true} label="Direccion" name='locationAddress' placeholder='Av de las ciencias' size='sm'/>
      <Input required={true} label="Latitud" name='locationLat' placeholder='-120' size='sm'/>
      <Input required={true} label="Longitud" name='locationLng' placeholder='20' size='sm'/>
      <SelectManager managers={managersData} locations={locationsData}/>
      <Button className='bg-rose-700 text-white' type="submit">Crear Tienda</Button>
    </form>
  )
}

export default FormNewLocation