import React, { Component } from 'react';
import SearchPresenter from "./SearchPresenter";

export default class SearchContainer extends Component {
    state = {
        loading: false,
        movieResults: null,
        tvResults: null,
        searchTerm: ""
    };

    handleSearchUpdate = text => {
        this.setState({
            searchTerm: text
        })
    };

    render() {
        const { loading, movieResults, tvResults, searchTerm } = this.state;
        return (
            <SearchPresenter
                loading={loading}
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                handleSearchUpdate={this.handleSearchUpdate}
            />
        )
    }
}
