import React from 'react';
import defaultImage from '../img/mse_default_img-01.png';

const MovieDetail = (props) => {
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }

    const d = new Date(props.currentMovie.release_date);
    const month = d.getMonth();
    const day = d.getDay();
    const year = d.getFullYear();

    return (
        <div className={'movie-details'}>
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
                <p className={'title'}>
                    {props.currentMovie.title}
                </p>

                <p className={'date'}>
                    {`${months[month]} ${day}, ${year}`}
                </p>

                <p className={'overview'}>
                    {props.currentMovie.overview}
                </p>
            </div>
        </div>
    );
}

export default MovieDetail;