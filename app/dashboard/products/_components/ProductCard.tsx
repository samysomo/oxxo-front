import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Link from 'next/link'

const ProductCard = ({product, full, hover, main} : {product: Product, full: boolean, hover: boolean, main: boolean}) => {
  return (
    <Card className={`m-6 w-[180px] text-center ${hover ? "hover:scale-110 hover:bg-rose-200" : ""} ${main ? "text-3xl h-[40vh] w-full my-5" : ""}`} key={product.productId}>
        <CardHeader>
            <Link className=' w-full text-center' href={`/dashboard/products/${product.productId}`}>
              <p className={`w-full text-black`}><b>{product.productName}</b></p>
            </Link>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Precio: <b>{product.price}</b></p>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Sellos: <b>{product.countSeal}</b></p>
            {full && (
              <>
                <Link href={`/dashboard/providers/${product.provider?.providerId}`}>
                  <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Proveedor: <b className='hover:underline'>{product.provider?.providerName}</b></p>
                </Link>
              </>
            )}
        </CardBody>
    </Card>
  )
}

export default ProductCard