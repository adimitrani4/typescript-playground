import express, {Request, Response, NextFunction } from 'express';
import { Movie } from './movie';
import movies_data from './server_data/movies_data.json';

const app = express();
const port = 8080;

const movies : Movie[] = movies_data;
console.log(`got ${movies.length} movies from json`);

//To solve the bug: No 'Access-Control-Allow-Origin' header is present on the requested resource
app.use((req, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/movie/:movieName', (req: Request, res: Response) =>{
  const selectedMovie: Movie | undefined = movies.find(movie => movie.title === req.params.movieName);
  res.send(selectedMovie);
});

app.get('/moviesForGenre/:genre', (req: Request, res: Response) =>{
  //if there is no movie with this gemere will return an empty array
  const selectedMovie: Movie[]= movies.filter(movie => movie.genres.includes(req.params.genre));
  res.send(selectedMovie);
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});