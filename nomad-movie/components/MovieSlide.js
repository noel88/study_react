import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import makePhotoUrl from "../utils/makePhotoUrl";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const Content = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
 
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.5;
  position: absolute;
`;

const MovieSlide = ({
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview
}) => (
    <Container>
        <BgImage source={{uri: makePhotoUrl(backgroundPhoto)}} />
        <Content>
            <MoviePoster path={posterPhoto} />
        </Content>
    </Container>
);

MovieSlide.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired

};

export default MovieSlide;
