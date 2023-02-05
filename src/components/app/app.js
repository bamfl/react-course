import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import Counter from "../counter/counter";
import Form from "../form/form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [
        {
          id: 1,
          name: "John",
          salary: 1500,
          hasBonus: true,
          isFavorite: true,
        },
        {
          id: 2,
          name: "Alex",
          salary: 900,
          hasBonus: false,
          isFavorite: false,
        },
        {
          id: 3,
          name: "Gwen",
          salary: 3500,
          hasBonus: false,
          isFavorite: false,
        },
      ],
      search: "",
      filter: "all",
    };
  }

  deleteEmployee = (id) => {
    this.setState(({ employees }) => ({
      employees: employees.filter((employee) => employee.id !== id),
    }));
  };

  addEmployee = (newEmployee) => {
    this.setState(({ employees }) => ({
      employees: [...employees, newEmployee],
    }));
  };

  toggleBooleanProp = (id, propName) => {
    this.setState(({ employees }) => ({
      employees: employees.map((employee) => {
        if (employee.id === id) {
          return { ...employee, [propName]: !employee[propName] };
        }

        return employee;
      }),
    }));
  };

  onSearchInputChange = (search) => {
    this.setState({ search });
  };

  search = () => {
    const { employees, search } = this.state;

    if (search === "") return employees;

    return employees.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  onChangeActiveBtn = (activeFilter) => {
    this.setState({
      filter: activeFilter,
    });
  };

  filter = (data) => {
    const { filter } = this.state;

    switch (filter) {
      case "salary":
        return data.filter((item) => item.salary > 1000);
      case "isFavorite":
        return data.filter((item) => item.isFavorite);
      default:
        return data;
    }
  };

  onSalaryChange = (id, newSlary) => {
    this.setState(({ employees }) => ({
      employees: [...employees].map((employee) => {
        if (employee.id === id) {
          return { ...employee, salary: newSlary };
        }

        return employee;
      }),
    }));
  };

  render() {
    const filteredData = this.filter(this.search());

    return (
      <div className="app">
        <Counter className="mb-3" startCount={0} />
        <Form className="mb-3" />

        <AppInfo employees={this.state.employees} />

        <div className="search-panel">
          <SearchPanel onSearchInputChange={this.onSearchInputChange} />
          <AppFilter onChangeActiveBtn={this.onChangeActiveBtn} />
        </div>

        <EmployeesList
          employees={filteredData}
          deleteEmployee={this.deleteEmployee}
          toggleBooleanProp={this.toggleBooleanProp}
          onSalaryChange={this.onSalaryChange}
        />
        <EmployeesAddForm addEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
