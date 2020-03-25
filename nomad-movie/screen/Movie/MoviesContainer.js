import React, { Component } from 'react';
import MoviesPresenter from "./MoviesPresenter";
import {moviesApi} from "../../api";

export default class MoviesContainer extends Component {
    state = {
        loading: true,
        upcoming: null,
        popular: null,
        nowPlaying: null
    };

    async componentWillMount() {
        let upcoming, popular, nowPlaying, error;
        try {
            ({
                data: {results: upcoming}
            } = await moviesApi.upcoming());
            ({
                data: {results: popular}
            } = await moviesApi.popular());
            ({
                data: {results: nowPlaying}
            } = await moviesApi.nowPlaying());

        } catch {
            error = "Can't get Movies!";
        } finally {
            this.setState({loading: false, error, upcoming, popular, nowPlaying})
        }
    }

    render() {
        const { loading, upcoming, popular, nowPlaying, error } = this.state;
        return <MoviesPresenter loading={loading} />
    }
}
