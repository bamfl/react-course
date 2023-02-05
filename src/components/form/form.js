import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hi",
    };
  }

  submit = (e, testArg) => {
    console.log(testArg);

    e.preventDefault();

    console.log(this.state);
  };

  commitInputChange = (e, testArg) => {
    console.log(testArg);

    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div className="mb-3">
        <form onSubmit={(e) => this.submit(e, "testArg - onSubmit")}>
          <label>
            <div>Имя:</div>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.commitInputChange(e, "testArg - onChange")}
            />
          </label>

          <button type="submit">Отправить</button>
        </form>
      </div>
    );
  }
}

export default Form;
