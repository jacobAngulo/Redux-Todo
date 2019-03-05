import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <TodoList/>
      <TodoForm/>
      </div>
    );
  }
}

export default App;
