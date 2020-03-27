import React, {Component} from "react";
import { Text } from "react-native";
import PropTypes from 'prop-types';
import DetailPresenter from "./DetailPresenter";
import {moviesApi, tvApi} from "../../api";

export default class extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("title")
        }
    };

    constructor(props) {
        super(props);
        const { navigation: {
                    state : {
                        params: {
                            id,
                            isMovie,
                            posterPhoto,
                            backgroundPhoto,
                            title,
                            voteAvg,
                            overview
                        }
                    }
                }
            }  = props;
        this.state = {
            id,
            isMovie,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading: true
        }
    }

    async componentDidMount() {
        const { isMovie, id } = this.state;
        let error, genres, overview, status, date, backgroundPhoto;
        try {
            if (isMovie) {
                ({
                    genres, overview, status, release_date: date, backdrop_path: backgroundPhoto
                } = await moviesApi.movieDetail(id))
            } else {
                ({
                    genres, overview, status, first_air_date: date, backdrop_path: backgroundPhoto
                } = await tvApi.showDetail(id))
            }
        } catch {
            error = "Can't the result!"
        } finally {
            this.setState(prev => {
                return {
                    ...prev,
                    loading: false,
                    genres,
                    overview,
                    status,
                    date,
                    backgroundPhoto
                }
            })
        }
    }


    render() {
        const {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading
        } = this.state;
        return (
            <DetailPresenter
                id={id}
                isMovie={isMovie}
                backgroundPhoto={backgroundPhoto}
                posterPhoto={posterPhoto}
                title={title}
                voteAvg={voteAvg}
                overview={overview}
                loading={loading}
             />
        )
    }
}
