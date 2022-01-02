import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const axios = require('axios');

function MoviesList(props)
{
    return(
        props.movies.map((movie) =>
        <MovieData {...movie}/>)
    )
}

class MovieData extends React.Component
{
    render()
    {
        const movieData = this.props;
        return(
            <div className='movie'>
                <div className='movieTitle'>
                    {movieData.title}
                </div>
                <div className='movieInfo'>
                    {movieData.genres.map((genre) =>
                        <li key={genre}>
                            {genre}
                        </li>
                    )}
                </div>
            </div>
        )
    }
}

class Form extends React.Component
{
    state = { 
    movieName: '' 
    };

	handleSubmit = async (event) => {
  	    event.preventDefault();
        const resp = await axios(`http://localhost:8080/movie/${this.state.movieName}`);
        this.props.onSubmit(resp.data);
        console.log(resp);
        this.setState({ movieName: '' });
    };

	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.movieName}
          onChange={event => this.setState({ movieName: event.target.value })}
          placeholder="Enter Movie Name" 
          required 
        />
        <button>Search</button>
    	</form>
    );
  }
}

class App extends React.Component {

    state = {
        movieData: []
    };

    addMovieData = (newMovieData) => {
        this.setState({movieData: [newMovieData]});
    };

    render() {
      return (
        <div className='app'>
            <div className="logo">
                <img src="baseline_star_rate_black_24dp.png"/>
            </div>
            <div className='logic'>
            <Form onSubmit={this.addMovieData}/>
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
  