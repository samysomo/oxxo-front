"use client"
import { Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SelectLocation = ({locations} : {locations : LocationEntity[]}) => {
    const router = useRouter()
  return (
    <Select 
        placeholder='Selecciona una tienda' 
        classNames={{
        mainWrapper: "hover:ring-2 ring-rose-400 rounded-xl transition-all"
        }}
        label="Tienda"
        onChange={((e =>{
            router.push(`/dashboard?store=${e.target.value}`)
        }))}
    >
        {locations.map((location: LocationEntity) => (
            <SelectItem key={location.locationId} value={location.locationId}>
                {location.locationName}
            </SelectItem>
        ))}
    </Select>
  )
}

export default SelectLocation