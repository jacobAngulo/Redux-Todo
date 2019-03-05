import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "../actions";

const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodoObj = {
        todo: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodoObj]
      };
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todoObj => {
          if (todoObj.id === action.payload) {
            return {
              ...todoObj,
              completed: !todoObj.completed
            };
          }
          return todoObj;
        })
      };
      case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todoObj => todoObj.id !== action.payload)
      }
    default:
      return state;
  }
};
