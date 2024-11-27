import { API_URL } from '@/constants'
import authHeaders from '@/helpers/authHeaders'
import React from 'react'
import ManagerCard from './_components/ManagerCard'
import { Card } from '@nextui-org/react'
import { getUserRoles } from '@/helpers/getUserRoles'
import { getUserEmail } from '@/helpers/getUserEmail'
import UpdateManagerModal from './_components/UpdateManagerModal'
import UpdateManagerForm from './_components/UpdateManagerForm'

const ManagersPage = async () => {
    const userRole = getUserRoles()
    console.log(userRole)

    if (userRole[0] === "Admin"){
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
    } else if (userRole[0] === "Manager"){
        const userEmail = getUserEmail()
        const responseManager = await fetch(`${API_URL}/managers/email/${userEmail}`, {
            headers: {
                ...authHeaders(),
            },
            next: {
                tags: ["dashboard:managers"]
            }
        })
        const managerData : Manager = await responseManager.json()
        return (
            <div className='w-full flex items-center justify-center h-[50vh]'>
                <ManagerCard manager={managerData} full={true} hover={false} main={true}/>
            </div>
        )
    } else {
        return (
            <div className='w-full flex items-center justify-center h-[50vh]'>
                <h2 className='text-3xl font-bold'>No tienes acceso a esta ruta</h2>
            </div>
        )
    }
    
}

export default ManagersPage