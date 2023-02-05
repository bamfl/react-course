import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component {
  render() {
    const {
      id,
      name,
      salary,
      deleteEmployee,
      toggleBooleanProp,
      onSalaryChange,
    } = this.props;

    const { hasBonus, isFavorite } = this.props;

    const bonusClass = hasBonus ? "increase" : "";
    const bonusClassCookie = hasBonus ? "btn-secondary" : "";
    const favoriteClass = isFavorite ? "like" : "";

    return (
      <li
        className={`list-group-item d-flex justify-content-between ${bonusClass} ${favoriteClass}`}
      >
        <span
          className="list-group-item-label"
          onClick={() => toggleBooleanProp(id, "isFavorite")}
        >
          {name}
        </span>

        <input
          type="text"
          className="list-group-item-input"
          value={salary}
          onChange={(e) => onSalaryChange(id, e.target.value)}
        />

        <div className="d-flex justify-content-end align-items-center buttons-group">
          <button
            type="button"
            className={`btn-cookie btn-sm ${bonusClassCookie}`}
            onClick={() => toggleBooleanProp(id, "hasBonus")}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={() => deleteEmployee(id)}
          >
            <i className="fas fa-trash"></i>
          </button>

          <div className="me-2">
            <i className="fas fa-star"></i>
          </div>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
