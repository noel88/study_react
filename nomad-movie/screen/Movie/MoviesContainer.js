import React, { Component } from 'react';
import MoviesPresenter from "./MoviesPresenter";

export default class MoviesContainer extends Component {
    state = {
        loading: true
    };

    render() {
        const { loading } = this.state;
        return <MoviesPresenter loading={loading} />
    }
}
