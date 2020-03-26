import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {GREY_COLOR, TINT_COLOR} from "../constants/Colors";

const Vote = styled.Text`
  color: ${props => props.inSlide ? TINT_COLOR : GREY_COLOR};
  font-size: 10px;
`;

const MovieRating = ({votes, inSlide = false}) => (
    <Vote>
        {`⭐ ${votes} / 10`}
    </Vote>
);

MovieRating.propTypes = {
    votes: PropTypes.number.isRequired,
    inSlide: PropTypes.bool.isRequired
};

export default MovieRating;
