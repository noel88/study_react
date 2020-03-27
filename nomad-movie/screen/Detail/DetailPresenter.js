import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {BG_COLOR, TINT_COLOR} from "../../constants/Colors";
import Layout from "../../constants/Layout";
import makePhotoUrl from "../../utils/makePhotoUrl";
import MoviePoster from "../../components/MoviePoster";
import MovieRating from "../../components/MovieRating";


const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
  flex: 1;
`;

const Header = styled.View`
  position: relative;
  justify-content: flex-end;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  height: ${Layout.height / 3};
`;

const Column = styled.View`
  margin-left: 30px;

`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 14px;
  font-weight: 600;
`;

const DetailPresenter = ({   id,
                             isMovie,
                             posterPhoto,
                             backgroundPhoto,
                             title,
                             voteAvg,
                             overview }) => (
                                 <Container>
                                     <Header>
                                         <BgImage source={{uri: makePhotoUrl(backgroundPhoto)}} />
                                         <Content>
                                             <MoviePoster path={posterPhoto} />
                                             <Column>
                                                 <Title>{title}</Title>
                                             </Column>
                                         </Content>
                                     </Header>
                                 </Container>
);


DetailPresenter.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number,
    overview: PropTypes.string,
    isMovie: PropTypes.bool.isRequired
};

export default DetailPresenter;
