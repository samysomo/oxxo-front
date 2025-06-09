import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import Link from 'next/link'

const ProviderCard = ({provider, full, hover, main} : {provider: Provider, full: boolean, hover: boolean, main: boolean}) => {
  return (
    <Card className={`m-5 h-fit text-center ${hover ? "hover:scale-110 hover:bg-rose-200" : ""} ${main ? "text-3xl h-[35vh] mx-10 my-5" : ""}`} key={provider.providerId}>
        <CardHeader>
            <Link className=' w-full text-center' href={`/dashboard/providers/${provider.providerId}`}>
              <p className={`w-full text-black`}><b>{provider.providerName}</b></p>
            </Link>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Email: <b>{provider.providerEmail}</b></p>
            <p className={`w-full text-black ${main ? "text-xl" : ""}`}>Telefono: <b>{provider.providerPhoneNumber}</b></p>
            {full && (
                <Link href={`/dashboard/providers/products/${provider.providerId}`} className='hover:underline text-black'>
                  <p className={`w-full text-black ${main ? "text-xl" : ""}`}>
                    Productos: <b>{provider.products ? provider.products.length : 0}</b>
                  </p>
                </Link>
                
            )}
        </CardBody>
    </Card>
  )
}

export default ProviderCard