import EmployeeListItem from './EmployeeListItem';

function EmployeeList({ employees }) {
  return (
    <div>
      {employees.map((employee) => (
        <EmployeeListItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;