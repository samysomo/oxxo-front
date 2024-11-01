"use client"
import { Select, SelectItem } from '@nextui-org/react'
import React, { ReactNode } from 'react'

const SelectStore = ({stores, defaultStore} : {stores : LocationEntity[], defaultStore : number | undefined}) => {
    const disabledStores = stores.map((store : LocationEntity) => {
        if (store.manager !== undefined) {
            return store.locationId.toString()
        }
    }).filter((storeId) => storeId !== undefined)
  return (
    <Select label={"Selecciona una tienda"} name='location' defaultSelectedKeys={defaultStore ? [defaultStore.toString()] : undefined} disabledKeys={disabledStores}>
        {stores.map((store) => (
            <SelectItem key={store.locationId} className='text-black'>
                {store.locationName}
            </SelectItem>
        ))}
    </Select>
  )
}

export default SelectStore