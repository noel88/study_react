import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

// function Detail( {todo}) {
function Detail() {
  const { id } = useParams();
  const selector = useSelector((state) => state)
  const todo = selector.filter(t => {
    return t.id === parseInt(id)
  });
  console.log("details: ", todo)

  return (
    <>
      <h1>{todo[0].text}</h1>
      <h5>Create at: {todo[0].id}</h5>
    </>
  )
}
function mapStateToProps(state, ownProps) {
  const {
    match: {
        params: {id}
      }
  } = ownProps;
  return {todo: state.find(todo => todo.id === parseInt(id))};
}

// export default connect(mapStateToProps)(Detail);
export default Detail;
