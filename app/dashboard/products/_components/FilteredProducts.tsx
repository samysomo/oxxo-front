"use client"
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Input, Select, SelectItem } from '@nextui-org/react'

const FilteredProducts = ({products, providers} : {products : Product[], providers : Provider[]}) => {
    const [search, setSearch] = useState("")
    const [provider, setProvider] = useState("")
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

    useEffect(() => {
      const filtered = products.filter((product) => (product.productName.toLowerCase().includes(search.toLowerCase()))
        && product.provider.providerId === provider
      )
      setFilteredProducts(filtered)
    }, [provider, search, products])
    

  return (
    <div>
        <div className='flex flex-col items-center justify-center m-10 gap-8'>
            <Select onChange={(e) => setProvider(e.target.value)} className='max-w-[400px] text-black' label="Filtrar por proveedor">
              {providers.map((provider) => (
                <SelectItem key={provider.providerId} className='text-black'>
                  {provider.providerName}
                </SelectItem>
              ))}
            </Select>
            <Input 
                label="Busca un producto" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                className='max-w-[400px]'
            />
        </div>
        <div className='flex items-center justify-center'>
          <div className='grid grid-cols-2 overflow-y-auto'>
              {filteredProducts.map((product) => (
              <ProductCard key={product.productId} product={product} main={false} hover={true} full={true}/>
              ))}
          </div>
        </div>
        
    </div>
  )
}

export default FilteredProducts