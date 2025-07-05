import React from "react";
import css from "../App.css";
const employee = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Tech",
    role: "Frontend Developer",
  },
  { id: 2, name: "Bob Smith", department: "HR", role: "Recruiter" },
  {
    id: 3,
    name: "Charlie Brown",
    department: "Tech",
    role: "Backend Developer",
  },
  { id: 4, name: "Diana Ross", department: "Finance", role: "Accountant" },
  {
    id: 5,
    name: "Alice Johnson",
    department: "Tech",
    role: "Frontend Developer",
  },
  { id: 6, name: "Bob Smith", department: "HR", role: "Recruiter" },
  {
    id: 7,
    name: "Charlie Brown",
    department: "Tech",
    role: "Backend Developer",
  },
  { id: 8, name: "Diana Ross", department: "Finance", role: "Accountant" },
];
const Employee = () => {
  const empleTech = employee.filter((e) => e.department === "Tech");
  return (
    <div className="container">
      <h1>All Employees</h1>
      <div className="employee-list">
        {employee.map((emp) => (
          <div key={emp.id} className="employee-card">
            <h3>{emp.name}</h3>
            <p>Department: {emp.department}</p>
            <p>Role: {emp.role}</p>
          </div>
        ))}
      </div>

      <h1>Tech Department</h1>
      <div className="employee-list">
        {empleTech.map((emp) => (
          <div key={emp.id} className="employee-card">
            <h3>{emp.name}</h3>
            <p>Department: {emp.department}</p>
            <p>Role: {emp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
