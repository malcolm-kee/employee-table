import { render, screen } from '@testing-library/react';
import { Employee } from '../employee.type';
import { EmployeeTable } from './employee-table';
import user from '@testing-library/user-event';

describe('EmployeeTable', () => {
  const mockEmployees: Array<Employee> = [
    {
      firstname: 'A',
      lastname: 'a',
      id: 1,
      employeeId: 'a',
      salary: 1000,
      dateJoined: new Date(1990, 1, 1),
    },
    {
      firstname: 'B',
      lastname: 'b',
      id: 2,
      employeeId: 'b',
      salary: 30000,
      dateJoined: new Date(1988, 1, 1),
    },
    {
      firstname: 'C',
      lastname: 'c',
      id: 3,
      employeeId: 'c',
      salary: 5000,
      dateJoined: new Date(2000, 1, 1),
    },
  ];

  it('sort by joined date by default', () => {
    render(<EmployeeTable employees={mockEmployees} />);

    expect(screen.getByTestId('employee-0-name')).toHaveTextContent('C c');
    expect(screen.getByTestId('employee-1-name')).toHaveTextContent('A a');
    expect(screen.getByTestId('employee-2-name')).toHaveTextContent('B b');
  });

  it('can sort by other field', () => {
    render(<EmployeeTable employees={mockEmployees} />);

    user.click(screen.getByLabelText('Sort by salary'));

    expect(screen.getByTestId('employee-0-name')).toHaveTextContent('A a');
    expect(screen.getByTestId('employee-1-name')).toHaveTextContent('C c');
    expect(screen.getByTestId('employee-2-name')).toHaveTextContent('B b');

    user.click(screen.getByLabelText('Sort by salary'));

    expect(screen.getByTestId('employee-0-name')).toHaveTextContent('B b');
    expect(screen.getByTestId('employee-1-name')).toHaveTextContent('C c');
    expect(screen.getByTestId('employee-2-name')).toHaveTextContent('A a');
  });
});
