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
        return location.manager?.managerId
    }).filter((managerId) => managerId !== undefined)
  return (
    <Select name='manager' label="Manager" disabledKeys={disabledKeys} defaultSelectedKeys={defaultManager}>
        {managers.map((manager : Manager) => (
            <SelectItem key={manager.managerId}>
                {manager.managerFullName}
            </SelectItem>
        ))}
    </Select>
  )
}

export default SelectManager