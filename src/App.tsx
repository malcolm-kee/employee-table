import { parseDate } from 'lib/date';
import { EmployeeLanding } from 'modules/employee';
import EmployeeData from './data/employee-data.json';

const employees = EmployeeData.map((employee) => ({
  ...employee,
  dateJoined: parseDate(employee.dateJoined),
}));

function App() {
  return (
    <main className="max-w-6xl mx-auto px-3 py-6 sm:px-6">
      <EmployeeLanding employees={employees} />
    </main>
  );
}

export default App;
