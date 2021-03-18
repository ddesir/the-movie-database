import React from 'react';
import defaultImage from '../img/mse_default_img-01.png';

const MovieCard = (props) => {
    const year = new Date(props.date).getFullYear()
    return (
        <div className={'movie-card'}>
            <a href={'#'} onClick={() => props.viewMovieDetail(props.movieId)}>
                <div className={'movie-card-img'}>
                    {
                        props.image === null ?
                            <img
                                src={defaultImage}
                                alt={'Movie poster unavailable'}
                            /> :
                            <img
                                src={`http://image.tmdb.org/t/p/w200${props.image}`}
                                alt={`${props.title} Poster`}
                            />
                    }
                </div>

                <h6>{props.title}</h6>
                <p className={'date'}>{year}</p>
            </a>

        </div>
    );
};

export default MovieCard;