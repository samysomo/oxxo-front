"use client"
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

type SelectManagerProps = {
    managers : Manager[], 
    locations: LocationEntity[],
    defaultManager?: string | undefined
}

const SelectManager = ({managers, locations, defaultManager} : SelectManagerProps) => {
    const disabledKeys = locations.map((location: LocationEntity) => {
        if(location.manager?.managerId !== defaultManager) return location.manager?.managerId
    }).filter((managerId) => managerId !== undefined)
  return (
    <Select className='text-black' name='manager' label="Manager" disabledKeys={disabledKeys} defaultSelectedKeys={defaultManager !== undefined ? [defaultManager] : []}>
        {managers.map((manager : Manager) => (
            <SelectItem className='text-black' key={manager.managerId}>
                {manager.managerFullName}
            </SelectItem>
        ))}
    </Select>
  )
}

export default SelectManager