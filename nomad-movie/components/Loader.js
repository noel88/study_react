import React from 'react';
import {ActivityIndicator} from 'react-native';
import {BG_COLOR, TINT_COLOR} from "../constants/Colors";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
  justify-content: center;
`;


export default () => (
    <Container>
        <ActivityIndicator color={TINT_COLOR} />
    </Container>
);

