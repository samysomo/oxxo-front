
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { createProvider } from '@/actions/providers/create'
import { createProduct } from '@/actions/products/create'
import SelectProvider from './SelectProvider'

const CreateProductForm = ({providers} : {providers : Provider[]}) => {

  const createProductAction = createProduct.bind(null)
 
  return (
    <form action={createProductAction} className='bg-rose-500 p-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Agregar Producto</h1>
      <Input required={true} label="Nombre del producto" name='productName' placeholder='Sabritas'/>
      <Input required={true} label="Precio del producto" name='price' placeholder='25'/>
      <Input required={true} label="Sellos del producto" name='countSeal' placeholder='3'/>
      <SelectProvider providers={providers}/>
      <Button className='bg-rose-700 text-white' type="submit">Agregar Producto</Button>
    </form>
  )
}

export default CreateProductForm