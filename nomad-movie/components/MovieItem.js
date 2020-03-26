import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import {TINT_COLOR} from "../constants/Colors";

const Container = styled.View``;
const Title = styled.Text`
  color: ${TINT_COLOR};
`;

const MovieItem = ({id, posterPhoto, title, voteAvg}) => (
    <Container>
        <MoviePoster path={posterPhoto} />
        <Title>{title}</Title>
        <MovieRating votes={voteAvg} inSlide={true}/>
    </Container>
);

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
};

export default MovieItem;
