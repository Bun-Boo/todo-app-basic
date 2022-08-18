import {
  SET_TODO_INPUT,
  ADD_TODO_INPUT,
  DELETE_TODO_INPUT,
  EDIT_TODO_INPUT,
} from "./constants";

export const setTodo = (payload) => {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO_INPUT,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO_INPUT,
    payload,
  };
};

export const editTodo = (id, payload) => {
  return {
    type: EDIT_TODO_INPUT,
    id,
    payload,
  };
};
