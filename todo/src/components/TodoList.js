import React from "react";
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <li>{todo}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
