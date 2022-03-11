import {createStore} from "redux";

const TodoActionType = {
  ADD: "ADD",
  DELETE: "DELETE",
}

const addTodo = (text) => {
  console.log("add TODO")
  return {
    type: TodoActionType.ADD,
    text
  }
}

const deleteTodo = (id) => {
  return {
    type: TodoActionType.DELETE,
    id
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case TodoActionType.ADD:
      return [ { text: action.text, id: Date.now() }, ...state ];
    case TodoActionType.DELETE:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);
export const actionCreators = {
  addTodo,
  deleteTodo
}
export default store;
