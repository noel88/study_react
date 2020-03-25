import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Swiper from 'react-native-viewpager';
import Layout from "../constants/Layout";
import MovieSlide from "./MovieSlide";


const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  background-color: red;
  height: ${SWIPER_HEIGHT};
`;
const Text = styled.Text``;



const MovieSlider = ({movies}) => (
    <Swiper showPagination={false} autoplay={true} style={{height: SWIPER_HEIGHT}}>
        {movies ? movies.filter(movie => movie.backdrop_path !== null).map(movie => (
            <View key={movie.id}>
                <MovieSlide id={movie.id} posterPhoto={movie.poster_path} backgroundPhoto={movie.backdrop_path} title={movie.title} voteAvg={movie.vote_average} overview={movie.overview}/>
            </View>
        )) : null}
    </Swiper>
);

MovieSlider.propTypes = {
    movies: PropTypes.array
};

export default MovieSlider;
