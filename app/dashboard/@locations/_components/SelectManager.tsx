"use client"
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

const SelectManager = ({managers, locations} : {managers : Manager[], locations: LocationEntity[]}) => {
    const disabledKeys = locations.map((location: LocationEntity) => {
        return location.manager?.managerId
    }).filter((managerId) => managerId !== undefined)
  return (
    <Select name='manager' label="Manager" disabledKeys={disabledKeys}>
        {managers.map((manager : Manager) => (
            <SelectItem key={manager.managerId}>
                {manager.managerFullName}
            </SelectItem>
        ))}
    </Select>
  )
}

export default SelectManager