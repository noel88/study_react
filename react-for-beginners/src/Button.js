import PropTypes from "prop-types";
import styled from "./Button.module.css";

export function Button({text, onClick}) {
    return <button className={styled.btn} onClick={onClick}>{text}</button>
}


Button.proptype = {
    text: PropTypes.string.isRequired,
}
