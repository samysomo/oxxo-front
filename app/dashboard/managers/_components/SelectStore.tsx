"use client"
import { Select, SelectItem } from '@nextui-org/react'
import React, { ReactNode } from 'react'

const SelectStore = ({stores, defaultStore, notDisabled} : {stores : LocationEntity[], defaultStore? : number | undefined, notDisabled : boolean} ) => {
    console.log(stores)
    const disabledStores = stores.map((store : LocationEntity) => {
        if (store.manager !== undefined || store.manager !== null) {
            return store.locationId.toString()
        }
    }).filter((storeId) => storeId !== undefined)

  return (
    <Select label={"Selecciona una tienda"} name='location' defaultSelectedKeys={defaultStore ? [defaultStore.toString()] : undefined} disabledKeys={notDisabled ? "" : disabledStores}>
        {stores.map((store) => (
            <SelectItem key={store.locationId} className='text-black'>
                {store.locationName}
            </SelectItem>
        ))}
    </Select>
  )
}

export default SelectStore