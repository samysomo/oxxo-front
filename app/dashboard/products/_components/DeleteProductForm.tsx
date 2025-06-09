import deleteProduct from '@/actions/products/delete'
import { Button } from '@nextui-org/react'

const DeleteProductForm = ({product} : {product : Product}) => {
  const deleteProductWithId = deleteProduct.bind(null, product.productId)
  return (
    <form action={deleteProductWithId}>
        <h1 className='text-center text-2xl p-5'>¿Estás seguro de eliminar el producto <b>{product.productName}</b>?</h1>
        <Button 
            className='bg-rose-700 text-white font-bold w-full'
            type='submit'
        >
        Eliminar Producto
    </Button>
    </form>
    
  )
}

export default DeleteProductForm