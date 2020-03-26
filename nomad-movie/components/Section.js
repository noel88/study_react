import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {TINT_COLOR} from "../constants/Colors";
import MovieItem from "./MovieItem";

const Container = styled.View`
  margin: 10px 0;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-weight: 600;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 12px;
`;

const ScrollView = styled.ScrollView``;

const Section = ({title, movies}) => (
    <Container>
        <Title>{title}</Title>
        <ScrollView horizontal>{movies.filter(movie => movie.poster_path !== null).map(movie => <MovieItem key={movie.id} posterPhoto={movie.poster_path} voteAvg={movie.vote_average} id={movie.id} title={movie.title}/>)}</ScrollView>
    </Container>
);

Section.propTypes = {
    movies: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Section;
