import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import FilteredProducts from './_components/FilteredProducts'

const API_URL = process.env.API_URL

const ProductsLayout = async ({children} : {children: React.ReactNode}) => {
    const response = await fetch(`${API_URL}/products`, {
        headers: {
          ...authHeaders(),
        },
        next: {
          tags: ["dashboard:products"]
        }
      })
    
      const products : Product[] = await response.json()
    
      const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
          ...authHeaders(),
        },
        next: {
          tags: ["dashboard:providers"]
        }
      })
    
      const providers : Provider[] = await responseProviders.json()
      return (
        <div className='flex w-10/12'>
            <div className='h-[90vh] w-6/12'>
                <div className=''>
                    <FilteredProducts products={products} providers={providers}/>
                </div>
            </div>
            <div className='w-6/12'>
                {children}
            </div>
        </div>
        
      )
}

export default ProductsLayout