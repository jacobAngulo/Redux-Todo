import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputField: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    console.log("submitting");
    if(this.state.inputField !== '') {
      this.props.addTodo(this.state.inputField)
    }
    this.setState({
      inputField: ''
    })
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      inputField: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={e => this.addTodo(e)}>
        <input
          onChange={e => this.handleChanges(e)}
          value={this.state.inputField}
          type="text"
        />
        <button>add todo</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
