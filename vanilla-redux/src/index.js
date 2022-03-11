import {createStore} from "redux";

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const addTodo = (text) => {
  return { type: ADD_TODO, text}
}

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id}
}

const reducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;

  }
}

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text))
}

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id))
}

const paintTodos = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener("click", dispatchDeleteTodo)
    li.id = todo.id
    li.innerText = todo.text
    li.append(btn);
    ul.append(li)
  })
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
store.subscribe(paintTodos)

const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddTodo(todo);

}

form.addEventListener("submit", onSubmit);
