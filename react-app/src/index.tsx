import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import Movie from './movie';
// import {MoviesList} from './MoviesList';

const MoviesList = (props: { movies: Movie[]; }) =>
{
    return(
        <>{
        props.movies.map((movie : Movie) => <MovieData key={movie.title} {...movie}/>)
        }</>
    )
}

function MovieData(props: Movie)
{
    const movieData = props;
    return(
            <div className='movie'>
                <div className='movieTitle'>
                    {movieData.title}
                </div>
                <div className='movieInfo'>
                    {movieData.genres.map((genre: string) =>
                        <li key={genre}>
                            {genre}
                        </li>
                    )}
                </div>
            </div>
    )
}

interface FormProps
{
    onSubmit: (movieData: Movie[]) => void
}

const Form = (props:FormProps) => {
    const [movieGenreState, setMovieGenre] : [string, (genre: string) => void] = React.useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => 
    {
        event.preventDefault();
        const resp = await axios(`http://localhost:8080/moviesForGenre/${movieGenreState}`);
        console.log(resp);
        props.onSubmit(resp.data);
    };

    return (
    	<form onSubmit={handleSubmit}>
    	  <input 
          type="text" 
          value={movieGenreState}
          onChange={event => setMovieGenre(event.target.value)}
          placeholder="Enter Movie Genre" 
          required 
        />
        <button>Search</button>
    	</form>
    );

}

const App = () =>{
    const [movieDataState, setMovieData] : [Movie[], (movieData:Movie[])=>void] = React.useState([]);

    return (
        <div className='app'>
            <div className="logo">
                <img src="baseline_star_rate_black_24dp.png"/>
            </div>
            <div className='logic'>
            <Form onSubmit={(newMovieData: Movie[]) => {
        setMovieData(newMovieData);}
            }/>
            <MoviesList movies={movieDataState}/>
            </div>
        </div>
      );
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  