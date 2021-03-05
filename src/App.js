import React from 'react';
import './App.css';
import Nav from './components/Navbar';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import MovieDetail from './components/MovieDetail';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            searchTerm: '',
            totalResults: 0,
            currentPage: 1,
            currentMovie: null
        };

        this.apiKey = process.env.REACT_APP_API;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`;

        fetch(queryUrl)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results], totalResults: data.total_results});
            });
    };

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value});
    };

    nextPage = (pageNumber) => {
        const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`;

        fetch(queryUrl)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results], currentPage: pageNumber});
            });
    };

    viewMovieDetail = (id) => {
        const filteredMovie = this.state.movies.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ?
            filteredMovie[0] :
            null;

        this.setState({currentMovie: newCurrentMovie});
    };

    closeMovieDetail = () => this.setState({currentMovie: null});

    render() {
        const numPages = Math.floor(this.state.totalResults / 20);

        return (
            <div className={'container'}>
                <Nav
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />

                <div className={'grid'}>
                    {
                        this.state.currentMovie == null ?
                            <div>
                                <MovieList
                                    movies={this.state.movies}
                                    viewMovieDetail={this.viewMovieDetail}
                                />

                                {
                                    this.state.totalResults > 20 ?
                                        <Pagination
                                            pages={numPages}
                                            nextPage={this.nextPage}
                                            currentPage={this.state.currentPage}
                                        /> :
                                        ''
                                }

                            </div> :
                            <MovieDetail
                                currentMovie={this.state.currentMovie}
                                closeMovieDetail={this.closeMovieDetail}
                            />
                    }
                </div>
            </div>
        );
    }

}

export default App;
