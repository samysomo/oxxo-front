//Entities
type LocationEntity = {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatling: number[];
    manager?: Manager
    region?: any
    employees?: Employee[]
}

type Employee = {
    employeeId: string;
    employeeName: string;
    employeeLastName: string;
    employeePhoneNumber: string;
    employeeEmail: string;
    employeePhoto?: string;
    location?: Location
    user?: any
}

type Manager = {
    managerId: string;
    managerFullName: string;
    managerSalary: number;
    managerEmail: string;
    managerPhoneNumber: string;
    location?: Location
    user?: any
}