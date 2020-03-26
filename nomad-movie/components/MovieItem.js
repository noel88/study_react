import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import {GREY_COLOR, TINT_COLOR} from "../constants/Colors";

const Container = styled.View`
  margin-right: 20px;
`;
const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: ${props=> !props.big? "12" : "14"};
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const OverView = styled.Text`
  color: ${GREY_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
`;

const MovieItem = ({id, posterPhoto, title, voteAvg, horizontal = false, overview, isMovie, navigation}) => (
   <TouchableWithoutFeedback onPress={() =>navigation.navigate({
       routeName: 'Detail',
       params: {
           isMovie,
           id
       }
   })}>
       { horizontal ?
           <HContainer>
               <MoviePoster path={posterPhoto}/>
               <Column>
                   <Title big={true}>{title}</Title>
                   {overview.length > 150 ? <OverView>`${overview.substring(0, 147)}...` </OverView> : null}
               </Column>
           </HContainer>
           : <Container>
               <MoviePoster path={posterPhoto}/>
               <Title>{title.length > 15 ? `${title.substring(0, 12)}...` : title}</Title>
               <MovieRating votes={voteAvg} inSlide={true}/>
           </Container>
       }
   </TouchableWithoutFeedback>
);

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    isMovie: PropTypes.bool
};

export default withNavigation(MovieItem);
