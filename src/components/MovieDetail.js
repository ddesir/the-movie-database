import React from 'react';
import defaultImage from '../img/mse_default_img-01.png';

const MovieDetail = (props) => {

    return (
        <div>
            <div>
                <a href={'#'} onClick={props.closeMovieDetail}>
                    {`\u3008 Back`}
                </a>
            </div>

            <div className={'Row'}>
                {
                    props.currentMovie.poster_path == null ?
                        <img
                            src={defaultImage}
                            alt={'Movie poster unavailable'}
                        /> :
                        <img
                            src={`http://image.tmdb.org/t/p/w200${props.currentMovie.poster_path}`}
                            alt={`${props.title} Poster`}
                        />
                }
            </div>

            <div>
                <p>
                    {props.currentMovie.title}
                </p>

                <p>
                    {props.currentMovie.release_date}
                </p>

                <p>
                    {props.currentMovie.overview}
                </p>
            </div>
        </div>
    );
}

export default MovieDetail;