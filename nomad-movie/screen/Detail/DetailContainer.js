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
        const { navigation: { state : { param: id, posterPhoto, backgroundPhoto, title, voteAvg, overview }}}  = props;
        this.state = {
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview
        }
    }

    static propTypes = {
        id: PropTypes.number.isRequired,
        posterPhoto: PropTypes.string.isRequired,
        backgroundPhoto: PropTypes.string,
        title: PropTypes.string.isRequired,
        voteAvg: PropTypes.number,
        overview: PropTypes.string
    };

    render() {
        const {
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview
        } = this.state;
        return (
            <DetailPresenter
                id={id}
                backgroundPhoto={backgroundPhoto}
                posterPhoto={posterPhoto}
                title={title}
                voteAvg={voteAvg}
                overview={overview}
            />
        )
    }
}
