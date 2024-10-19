//Entities
type LocationEntity = {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatling: number[];
    manager?: any
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