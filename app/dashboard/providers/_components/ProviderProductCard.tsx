import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Link from 'next/link'

const ProviderProductCard = ({product, hover, main} : {product: Product, hover: boolean, main: boolean}) => {
  return (
    <Card className={`m-5 h-fit max-w-[250px] text-center ${hover ? "hover:scale-110 hover:bg-rose-200" : ""} ${main ? "text-3xl h-[35vh] mx-10 my-5" : ""}`} key={product.productId}>
        <CardHeader>
            <Link className=' w-full text-center' href={`/dashboard/products/${product.productId}`}>
              <p className={`w-full text-black`}><b>{product.productName}</b></p>
            </Link>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Precio: <b>{product.price}</b></p>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Sellos: <b>{product.countSeal}</b></p>
        </CardBody>
    </Card>
  )
}

export default ProviderProductCard