import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeList() {
  const employees = [
    { id: 1, name: 'John Doe', designation: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', designation: 'Project Manager' },
    { id: 3, name: 'Mike Johnson', designation: 'QA Engineer' }
  ];

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <div className="employee-cards">
        {employees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
