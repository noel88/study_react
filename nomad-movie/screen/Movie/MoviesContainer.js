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
        try {
            const upcoming = await moviesApi.upcoming();
            const popular = await moviesApi.popular();
            const nowPlaying = await moviesApi.nowPlaying();
        } catch (error){
            console.log(error);
            this.setState({error: "Can't get Movies!"})
        } finally {
            this.setState({loading: false})
        }
    }

    render() {
        const { loading } = this.state;
        return <MoviesPresenter loading={loading} />
    }
}
