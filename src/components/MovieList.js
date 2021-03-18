import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    return (
        <div className={'flex'}>
            {
                props.movies.map((movie, i) => {
                    return (
                        <MovieCard
                            key={i}
                            title={movie.title}
                            image={movie.poster_path}
                            date={movie.release_date}
                            viewMovieDetail={props.viewMovieDetail}
                            movieId={movie.id}
                        />
                    );
                })
            }
        </div>
    );
}

export default MovieList;