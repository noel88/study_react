import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {BG_COLOR, GREY_COLOR} from "../../constants/Colors";
import Layout from "../../constants/Layout";

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

const SearchPresenter = ({loading, movieResults, tvResults, searchTerm, handleSearchUpdate, onSubmitEditing}) => (
    <Container>
        <InputContainer>
            <Input
                value={searchTerm}
                returnKeyType="search"
                placeholderTextColor={GREY_COLOR}
                placeholder="Search Movies and TV"
                onChangeText={handleSearchUpdate}
                onSubmitEditing={onSubmitEditing}
            />
        </InputContainer>
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
