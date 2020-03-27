import React, {Component} from "react";
import { Text } from "react-native";
import PropTypes from 'prop-types';
import DetailPresenter from "./DetailPresenter";

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
        let error, genres, overview;
        try {

        } catch {

        } finally {
            this.setState({loading: false})
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
