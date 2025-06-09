import authHeaders from '@/helpers/authHeaders'
import CreateProductForm from './_components/CreateProductForm'

const API_URL = process.env.API_URL

const ProductsPage = async () => {

  const response = await fetch(`${API_URL}/providers`, {
    headers: {...authHeaders()},
    next: {
      tags: ["dashboard:providers"]
    }

  }) 
  const providers : Provider[] = await response.json()
  return (
    <div className='h-full flex justify-center items-center'>
      <div className='w-9/12'>
        <CreateProductForm providers={providers}/>
      </div>
    </div>
  )
}

export default ProductsPage