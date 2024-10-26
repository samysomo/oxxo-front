import { createLocation } from '@/actions/locations/create'
import { API_URL, TOKEN_NAME } from '@/constants'
import { Button, Input } from '@nextui-org/react'
import axios from 'axios'
import React from 'react'
import SelectManager from './SelectManager'
import authHeaders from '@/helpers/authHeaders'

const FormNewLocation = async() => {
  const responseManager = await axios.get(`${API_URL}/managers`, {
    headers: {
      ...authHeaders()
    }
  })
  const responseLocation = await axios.get(`${API_URL}/locations`, {
    headers: {
      ...authHeaders()
    }
  })
  return (
    <form action={createLocation} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Crear tienda</h1>
      <Input label="Nombre" name='locationName' placeholder='Oxxo Juriquilla'/>
      <Input label="Direccion" name='locationAddress' placeholder='Av de las ciencias'/>
      <Input label="Latitud" name='locationLat' placeholder='-120'/>
      <Input label="Longitud" name='locationLng' placeholder='20'/>
      <SelectManager managers={responseManager.data} locations={responseLocation.data}/>
      <Button className='bg-rose-700 text-white' type="submit">Crear Tienda</Button>
    </form>
  )
}

export default FormNewLocation