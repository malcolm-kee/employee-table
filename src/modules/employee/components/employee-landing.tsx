import { Employee } from '../employee.type';
import { EmployeeTable } from './employee-table';
import { EmployeeSummary } from './employee-summary';

export interface EmployeeLandingProps {
  employees: Array<Employee>;
}

export const EmployeeLanding = (props: EmployeeLandingProps) => {
  return (
    <div className="space-y-6">
      <EmployeeSummary employees={props.employees} />
      <EmployeeTable employees={props.employees} />
    </div>
  );
};
