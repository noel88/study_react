import React, {Component} from "react";
import { Text } from "react-native";
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
