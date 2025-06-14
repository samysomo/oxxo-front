"use client"
import { Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const SelectLocation = ({locations, store} : {locations : LocationEntity[], store: string | string[] | undefined}) => {
    const router = useRouter()
  return (
    <Select 
        placeholder='Selecciona una tienda' 
        classNames={{
        mainWrapper: "hover:ring-2 ring-rose-400 rounded-xl transition-all"
        }}
        label="Tienda"
        onChange={((e) =>{
            if(e.target.value === "") {
                router.push("/dashboard")
            } else {
                router.push(`/dashboard?store=${e.target.value}`)
            }
        })}
    >
        {locations.map((location: LocationEntity) => (
            <SelectItem key={location.locationId} value={location.locationId} className='text-black'>
                {location.locationName}
            </SelectItem>
        ))}
    </Select>
  )
}

export default SelectLocation