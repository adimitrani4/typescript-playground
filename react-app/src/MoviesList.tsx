import * as React from 'react';
import Movie from './movie';

export function MoviesList(props: { movies: Movie[]; }) {
    return (
        <>{props.movies.map((movie: Movie) => <MovieData {...movie} />)}</>
    );
}

function MovieData(props: Movie) {
    const movieData = props;
    return (
        <div className='movie'>
            <div className='movieTitle'>
                {movieData.title}
            </div>
            <div className='movieInfo'>
                {movieData.genres.map((genre: string) => <li key={genre}>
                    {genre}
                </li>
                )}
            </div>
        </div>
    );
}