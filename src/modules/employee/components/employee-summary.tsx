import { Card } from 'components/card';
import * as React from 'react';
import { getFullName } from '../employee.lib';
import { Employee } from '../employee.type';

export interface EmployeeSummaryProps {
  employees: Array<Employee>;
}

type MaybeEmployee = Employee | undefined;

export const EmployeeSummary = ({ employees }: EmployeeSummaryProps) => {
  const { highestEarning, mostRecent } = React.useMemo(() => {
    let highestEarning: MaybeEmployee = undefined;
    let mostRecent: MaybeEmployee = undefined;

    for (const employee of employees) {
      if (!highestEarning || highestEarning.salary < employee.salary) {
        highestEarning = employee;
      }

      if (!mostRecent || mostRecent.dateJoined < employee.dateJoined) {
        mostRecent = employee;
      }
    }

    return {
      highestEarning,
      mostRecent,
    };
  }, [employees]);

  return (
    <div className="space-y-3 sm:flex sm:space-x-3 sm:space-y-0">
      <Card>
        <Card.Content>
          <p className="text-gray-600">Number of employee</p>
          <div className="text-5xl text-right tabular-nums">
            {employees.length}
          </div>
        </Card.Content>
      </Card>
      <Card className="flex-1">
        <Card.Content className="text-lg">
          <div className="grid grid-cols-2 gap-3">
            <div className="text-gray-600">Highest earning employee:</div>
            <div className="text-right">
              {highestEarning ? getFullName(highestEarning) : 'N/A'}
            </div>
            <div className="text-gray-600">Employee most recently joined:</div>
            <div className="text-right">
              {mostRecent ? getFullName(mostRecent) : 'N/A'}
            </div>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};
