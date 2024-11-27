import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import ProductCard from '../_components/ProductCard'
import UpdateProductModal from '../_components/UpdateProductModal'
import UpdateProductForm from '../_components/UpdateProductForm'
import DeleteProductModal from '../_components/DeleteProductModal'
import DeleteProductForm from '../_components/DeleteProductForm'
import { getUserRoles } from '@/helpers/getUserRoles'

const ProductPage = async ({params} : {params: {id : string}}) => {
  const userRole = getUserRoles()
  const response = await fetch(`${API_URL}/products/${params.id}`, {
    headers: {...authHeaders()},
    next: {
      tags: [`dashboard:products:${params.id}`, "dashboard:products"]
    }
  })
  const productData : Product = await response.json()

  const responseProviders = await fetch(`${API_URL}/providers`, {
    headers: {...authHeaders()},
    next: {
      tags: ["dashboard:providers"]
    }

  }) 
  const providers : Provider[] = await responseProviders.json()
  return (
    <div className='w-full flex flex-col items-center justify-center h-full'>
      <div className='w-10/12 mr-20'>
        <ProductCard product={productData} full={true} hover={false} main={true}/>
      </div>
      <div className='w-full flex justify-end px-10 py-5 gap-5 mr-20'>
        <UpdateProductModal>
          <UpdateProductForm product={productData} providers={providers}/>
        </UpdateProductModal>
        {userRole[0] !== "Employee" && (
          <DeleteProductModal>
            <DeleteProductForm product={productData}/>
          </DeleteProductModal>
        )}
        
      </div>
    </div>
  )
}

export default ProductPage