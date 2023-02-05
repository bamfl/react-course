import "./app-info.css";

const AppInfo = ({ employees }) => {
  const totalEmployeesCount = employees.length;
  const employeesHasBonus = employees.filter(
    (employee) => employee.hasBonus
  ).length;

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Profit</h1>
      <h2>Общее число сотрудников: {totalEmployeesCount}</h2>
      <h2>Премию получат: {employeesHasBonus}</h2>
    </div>
  );
};

export default AppInfo;
