import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ employees, deleteEmployee, toggleBooleanProp, onSalaryChange }) => {
  const employeesElements = employees.map((employee) => {
    const { id } = employee;

    return (
      <EmployeesListItem
        key={id}
        {...employee}
        deleteEmployee={deleteEmployee}
        toggleBooleanProp={toggleBooleanProp}
        onSalaryChange={onSalaryChange}
      />
    );
  });

  if (employees.length === 0) {
    return <h4 className="mt-3">Нет результата</h4>;
  }

  return <ul className="app-list list-group">{employeesElements}</ul>;
};

export default EmployeesList;
