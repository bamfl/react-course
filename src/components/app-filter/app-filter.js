import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilterName: "all",
    };
  }

  changeActiveBtn = (e, name) => {
    this.setState({
      activeFilterName: name,
    });

    this.props.onChangeActiveBtn(name);
  };

  render() {
    const buttonsArr = [
      {
        title: "Все сотрудники",
        name: "all",
      },
      {
        title: "На повышение",
        name: "isFavorite",
      },
      {
        title: "З/П больше 1000$",
        name: "salary",
      },
    ];

    const buttons = buttonsArr.map((button) => {
      const className =
        this.state.activeFilterName === button.name
          ? "btn-light"
          : "btn-outline-light";

      return (
        <button
          className={`btn ${className}`}
          key={button.name}
          onClick={(e) => this.changeActiveBtn(e, button.name)}
        >
          {button.title}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}

export default AppFilter;
