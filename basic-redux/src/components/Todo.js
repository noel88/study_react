import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {Link} from "react-router-dom";

function Todo({ id, text, onBtnClick })  {
  return (
    <li>
      <Link to={`/${id}`}>
        { text } <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(parseInt(ownProps.id)))
  }
}

export default connect(null, mapDispatchToProps)(Todo);
