import {
  ADD_TODO_INPUT,
  DELETE_TODO_INPUT,
  EDIT_TODO_INPUT,
  SET_TODO_INPUT,
} from "./constants";

const initState = {
  todoInput: "",
  todos: JSON.parse(localStorage.getItem("todo")) ?? [],
};

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case SET_TODO_INPUT:
      newState = {
        ...state,
        todoInput: action.payload,
      };
      break;
    case ADD_TODO_INPUT:
      newState = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      localStorage.setItem("todo", JSON.stringify(newState.todos));
      break;

    case DELETE_TODO_INPUT:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      newState = {
        ...state,
        todos: newTodos,
      };
      localStorage.setItem("todo", JSON.stringify(newTodos));
      break;
    case EDIT_TODO_INPUT:
      const editTodos = [...state.todos];
      editTodos[action.id] = action.payload;
      newState = {
        ...state,
        todos: editTodos,
      };
      localStorage.setItem("todo", JSON.stringify(editTodos));
      break;
    default:
      throw new Error("Invalid in actions");
  }
  return newState;
}

export { initState };
export default reducer;
