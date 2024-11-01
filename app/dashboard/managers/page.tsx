import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import ManagerCard from './_components/ManagerCard'
import { Card } from '@nextui-org/react'

const ManagersPage = async () => {
  const response = await fetch(`${API_URL}/managers`, {
    headers: {...authHeaders()},
    next: {
        tags: ["dashboard:managers"]
    }
})
  const managers : Manager[] = await response.json()
  const managersNoStore : Manager[] = managers.filter((manager : Manager) => !manager.location)
  let max = 0;
  let salary = 0;
  managers.forEach((manager : Manager) => {
      if(manager.managerSalary > max) {
          max = manager.managerSalary
          salary += manager.managerSalary
      }
  })
  return (
  <Card className='w-fit p-4 text-center text-black'>
      <h1>Total de managers: {managers.length}</h1>
      <h1>Total de managers sin tienda: {managersNoStore.length}</h1>
      <h1>El salario maximo es: {max}</h1>
      <h1>El salario promedio es: {salary / managers.length}</h1>
  </Card>
  )
}

export default ManagersPage