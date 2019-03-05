import React from "react";
import { toggleCompleted, deleteTodo } from "../actions";
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todoObj => {
          return (
            <li
              className={todoObj.completed ? "completed" : ""}
              key={todoObj.id}
              onClick={() => this.props.toggleCompleted(todoObj.id)}
            >
              <button onClick={() => this.props.deleteTodo(todoObj.id)}>
                x
              </button>
              {todoObj.todo}
            </li>
          );
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
  { toggleCompleted, deleteTodo }
)(TodoList);
