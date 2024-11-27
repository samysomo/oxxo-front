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
    location?: LocationEntity
    user?: any
}

type Manager = {
    managerId: string;
    managerFullName: string;
    managerSalary: number;
    managerEmail: string;
    managerPhoneNumber: string;
    location?: LocationEntity
    user?: any
}

type Provider = {
    providerId: string;
    providerName: string;
    providerEmail: string;
    providerPhoneNumber: string;
    products?: Product[]
}

type Product = {
    productId: string;
    productName: string;
    price: number;
    countSeal: number;
    provider: Provider;
}

type User = {
    userId : string;
    userEmail: string;
    userPassword : string;
    userRoles: string[];
    manager: Manager
    employee: Employee
}