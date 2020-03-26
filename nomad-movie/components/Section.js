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
  margin-bottom: 15px;
`;

const ScrollView = styled.ScrollView`
  padding-left: 20px;
`;

const Section = ({title, children}) => (
    <Container>
        <Title>{title}</Title>
        <ScrollView horizontal>{children}</ScrollView>
    </Container>
);

Section.propTypes = {
    movies: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Section;
