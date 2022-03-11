import React, {useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {add, remove} from "../store";
import Todo from "../components/Todo";


// function Home({todos, addTodo}) {
function Home() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state)

  console.log("useSelector: ", selector)

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // addTodo(text);
    dispatch(add(text))
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text"
               value={text}
               onChange={onChange}
        />
        <button>Save</button>
      </form>
      <ul> {
        selector?.map(todo =>
          (<Todo {...todo} key={todo.id}/>))
      }</ul>
    </>
  );
}

function mapStateToProps(state) {
  return {todos: state};
}

function mapDispatchToProps(dispatch) {
  return {
    // addTodo: (text) => dispatch(actionCreators.addTodo(text))
  };
}

export default Home;
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
