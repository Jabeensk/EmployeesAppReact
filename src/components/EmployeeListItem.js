function EmployeeListItem({ employee }) {
    return (
      <div className="employee-item" style={{ border: '2px solid red', padding: '10px'}}>
        {/* // <img src={employee.avatar} alt={`Avatar of ${employee.name}`} /> */}
        <div>
          <h3>{employee.name}</h3>
          <p>{employee.position}</p>
        </div>
      </div>
    );
  }
  
  export default EmployeeListItem;