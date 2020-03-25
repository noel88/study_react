import React, { Component } from 'react';
import TVPresenter from "./TVPresenter";
import {tvApi} from "../../api";

export default class TVContainer extends Component {
    state = {
        loading: true,
        popular: null,
        topRated: null,
        airingToday: null
    };

    async componentDidMount() {
        let popular, topRated, airingToday, error;
        try {
            ({
                data: {results: popular}
            } = await tvApi.popular());
            ({
                data: {results: topRated}
            } = await tvApi.topRated());
            ({
                data: {results: airingToday}
            } = await tvApi.airingToday());
        } catch {
            error = "Can't get TV";
        } finally {
            this.setState({loading: false, error, popular, topRated, airingToday})
        }
    }

    render() {
        const { loading, popular, topRated, airingToday } = this.state;
        return <TVPresenter loading={loading} popular={popular} topRated={topRated} airingToday={airingToday} />
    }
}
