import { createLocation } from '@/actions/locations/create'
import { API_URL } from '@/constants'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import SelectManager from './SelectManager'
import authHeaders from '@/helpers/authHeaders'

const FormUpdateLocation = async({store} : {store: string | string[] | undefined}) => {
    if(!store || store === undefined) return null
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

  let foundLocation = locationsData.find((location) => location.locationId === +store)

  return (
    <form action={createLocation} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Actualizar tienda</h1>
      <Input defaultValue={foundLocation?.locationName} label="Nombre" name='locationName' placeholder='Oxxo Juriquilla'/>
      <Input defaultValue={foundLocation?.locationAddress} label="Direccion" name='locationAddress' placeholder='Av de las ciencias'/>
      <Input defaultValue={foundLocation?.locationLatling[0].toString()} label="Latitud" name='locationLat' placeholder='-120'/>
      <Input defaultValue={foundLocation?.locationLatling[1].toString()} label="Longitud" name='locationLng' placeholder='20'/>
      <SelectManager managers={managersData} locations={locationsData} defaultManager={foundLocation?.manager?.managerId}/>
      <Button className='bg-rose-700 text-white' type="submit">Crear Tienda</Button>
    </form>
  )
}

export default FormUpdateLocation