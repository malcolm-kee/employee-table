import { Table } from 'components/table';
import { useSort } from 'hooks/use-sort';
import { formatDate } from 'lib/date';
import { formatMoney } from 'lib/money';
import { getFullName } from '../employee.lib';
import { Employee } from '../employee.type';

export interface EmployeeTableProps {
  employees: Array<Employee>;
}

export const EmployeeTable = (props: EmployeeTableProps) => {
  const { sortedItems, sortBy, key, order } = useSort<
    Employee,
    'dateJoined' | 'firstname' | 'salary'
  >(props.employees, {
    key: 'dateJoined',
    order: 'desc',
  });

  return (
    <Table>
      <Table.Head>
        <Table.Tr>
          <Table.Th
            onSort={() => sortBy('firstname')}
            isSortKey={key === 'firstname'}
            sortOrder={order}
            columnName="full name"
          >
            Full name
          </Table.Th>
          <Table.Th
            onSort={() => sortBy('dateJoined')}
            isSortKey={key === 'dateJoined'}
            sortOrder={order}
            columnName="date joined"
          >
            Date joined
          </Table.Th>
          <Table.Th
            onSort={() => sortBy('salary')}
            isSortKey={key === 'salary'}
            sortOrder={order}
            className="text-right"
            columnName="salary"
          >
            Salary (RM)
          </Table.Th>
        </Table.Tr>
      </Table.Head>
      <Table.Body>
        {sortedItems.map((employee, index) => (
          <Table.Tr key={employee.id}>
            <Table.Td data-testid={`employee-${index}-name`}>
              {getFullName(employee)}
            </Table.Td>
            <Table.Td>{formatDate(employee.dateJoined)}</Table.Td>
            <Table.Td className="text-right">
              {formatMoney(employee.salary)}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Body>
    </Table>
  );
};
