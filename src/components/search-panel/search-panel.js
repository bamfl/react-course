import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serach: "",
    };
  }

  onInputChange = (e) => {
    this.setState({
      serach: e.target.value,
    });

    this.props.onSearchInputChange(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        name="name"
        value={this.state.serach}
        onChange={this.onInputChange}
      />
    );
  }
}

export default SearchPanel;
