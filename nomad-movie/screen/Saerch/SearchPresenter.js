import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {BG_COLOR, GREY_COLOR} from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
`;

const InputContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  background-color: rgba(255,255,255,1);
  width: ${Layout.width / 1.6};
  border-radius: 15px;
  padding: 10px;
  text-align: center;
`;

const SearchResults = styled.ScrollView`
  margin-top: 20px;
`;

const SearchPresenter = ({loading, movieResults, tvResults, searchTerm, handleSearchUpdate, onSubmitEditing}) => (
    <Container>
        <InputContainer>
            <Input
                onChangeText={handleSearchUpdate}
                value={searchTerm}
                returnKeyType="search"
                placeholderTextColor={GREY_COLOR}
                placeholder="Search Movies and TV"
                onSubmitEditing={onSubmitEditing}
            />
        </InputContainer>
        <SearchResults>
            { loading ? <Loader /> :
                <>
                    { movieResults ? (
                        movieResults.length > 0 ? (
                        <Section title="Movie Results">
                            {
                                movieResults.filter(movie => movie.poster_path !== null)
                                    .map(movie =>
                                        <MovieItem
                                            key={movie.id}
                                            posterPhoto={movie.poster_path}
                                            voteAvg={movie.vote_average}
                                            id={movie.id}
                                            title={movie.title}
                                            overview={movie.overview}
                                        />
                                    )
                            }
                        </Section>
                        ) : null
                    ) : null}
                    { movieResults ? (
                        tvResults.length > 0 ? (
                        <Section title="TV Results">
                            {
                                tvResults.filter(tv => tv.poster_path !== null)
                                    .map(tv =>
                                        <MovieItem
                                            key={tv.id}
                                            posterPhoto={tv.poster_path}
                                            voteAvg={tv.vote_average}
                                            id={tv.id}
                                            title={tv.name}
                                        />
                                    )
                            }
                        </Section>
                        ) : null
                    ) : null}
                </>
            }
        </SearchResults>
    </Container>
);

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    handleSearchUpdate: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired
};


export default SearchPresenter;
