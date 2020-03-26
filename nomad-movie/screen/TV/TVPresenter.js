import React from "react";
import { Text } from "react-native";
import PropTypes from 'prop-types';
import Loader from "../../components/Loader";
import styled from "styled-components";
import {BG_COLOR} from "../../constants/Colors";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({loading, popular, topRated, airingToday}) => (
    loading
        ? <Loader />
        : <Container>
            {
                airingToday ?
                    <Section title="Airing Today">
                        {
                            airingToday.filter(tv => tv.poster_path !== null)
                                .map(tv => <MovieItem
                                    key={tv.id}
                                    posterPhoto={tv.poster_path}
                                    voteAvg={tv.vote_average}
                                    id={tv.id}
                                    title={tv.name}
                                />)
                        }</Section>
                    : null
            }
            {
                airingToday ?
                    <Section title="TopRated Today">
                        {
                            topRated.filter(tv => tv.poster_path !== null)
                                .map(tv => <MovieItem
                                    key={tv.id}
                                    posterPhoto={tv.poster_path}
                                    voteAvg={tv.vote_average}
                                    id={tv.id}
                                    title={tv.name}
                                />)
                        }</Section>
                    : null
            }
        </Container>
);

TVPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array
};

export default TVPresenter;

