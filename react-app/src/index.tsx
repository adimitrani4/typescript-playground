import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import Movie from './movie';

function MoviesList(props: { movies: Movie[]; })
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

interface FormState{
    movieGenre: string
}

class Form extends React.Component<FormProps, FormState>
{
    state = { 
        movieGenre: '' 
    };

	handleSubmit = async (event: { preventDefault: () => void; }) => {
  	    event.preventDefault();
        const resp = await axios(`http://localhost:8080/moviesForGenre/${this.state.movieGenre}`);
        console.log(resp);
        this.props.onSubmit(resp.data);
    };

	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.movieGenre}
          onChange={event => this.setState({ movieGenre: event.target.value })}
          placeholder="Enter Movie Genre" 
          required 
        />
        <button>Search</button>
    	</form>
    );
  }
}

interface AppState {
    movieData: Movie[]
}

class App extends React.Component<{}, AppState> {
    state = {
        movieData: []
    };

    render() {
      return (
        <div className='app'>
            <div className="logo">
                <img src="baseline_star_rate_black_24dp.png"/>
            </div>
            <div className='logic'>
            <Form onSubmit={(newMovieData: Movie[]) => {
        this.setState({movieData: newMovieData});}
            }/>
            <MoviesList movies={this.state.movieData}/>
            </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  