import {createStore} from "redux";
import {configureStore, createAction, createSlice} from "@reduxjs/toolkit";
import {createReducer} from "@reduxjs/toolkit";

// const TodoActionType = {
//   ADD: "ADD",
//   DELETE: "DELETE",
// }
//
// const addTodo = (text) => {
//   console.log("add TODO")
//   return {
//     type: TodoActionType.ADD,
//     text
//   }
// }

// const deleteTodo = (id) => {
//   return {
//     type: TodoActionType.DELETE,
//     id
//   }
// }

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       return [ { text: action.payload, id: Date.now() }, ...state ];
//     case deleteTodo.type:
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }


//TODO: Redux toolkit
// const addTodo = createAction("ADD")
// const deleteTodo = createAction("DELETE")
//
// const reducer = createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteTodo]: (state, action) => {
//     return state.filter(todo => todo.id !== action.payload);
//   }
// })


const todos = createSlice({
  name: 'todoReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
})

export const { add, remove } = todos.actions;

// export const actionCreators = {
//   addTodo,
//   deleteTodo
// }


export default configureStore({reducer: todos.reducer});
