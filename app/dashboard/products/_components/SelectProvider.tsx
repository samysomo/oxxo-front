"use client"
import { Select, SelectItem } from '@nextui-org/react'
import React, { ReactNode } from 'react'

const SelectProvider = ({providers, defaultProvider} : {providers : Provider[], defaultProvider? : string | undefined}) => {
  return (
    <Select label={"Selecciona una proveedor"} name='provider' defaultSelectedKeys={defaultProvider ? [defaultProvider] : undefined}>
        {providers.map((provider) => (
            <SelectItem key={provider.providerId} className='text-black'>
                {provider.providerName}
            </SelectItem>
        ))}
    </Select>
  )
}

export default SelectProvider