import { Employee } from './employee.type';

export const getFullName = (employee: Employee) =>
  `${employee.firstname} ${employee.lastname}`;
