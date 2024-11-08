import { API_URL } from '@/constants'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import authHeaders from '@/helpers/authHeaders'
import { updateProduct } from '@/actions/products/update'
import SelectProvider from './SelectProvider'

const UpdateProductForm = async({product, providers} : {product : Product, providers : Provider[]}) => {

  const updateWithProductId = updateProduct.bind(null, product.productId)
 
  return (
    <form action={updateWithProductId} className='bg-rose-500 py-2 px-4 flex flex-col gap-6 w-full rounded-lg'>
      <h1 className='text-center text-3xl font-bold'>Actualizar Manager</h1>
      <Input required={true} defaultValue={product.productName} label="Nombre" name='productName' placeholder='Samuel Serrato'/>
      <Input required={true} defaultValue={product.price.toString()} label="Precio" name='price' placeholder='correo@correo.copm'/>
      <Input required={true} defaultValue={product.countSeal.toString()} label="Sellos" name='countSeal' placeholder='442123123'/>
      <SelectProvider providers={providers} defaultProvider={product.provider.providerId}/>
      <Button className='bg-rose-700 text-white' type="submit">Actualizar Producto</Button>
    </form>
  )
}

export default UpdateProductForm