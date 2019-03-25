import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component{
 state ={
  movies: getMovies()
 }

    render(){
     return(
         <div>
             <h1>Vidly Project</h1>
             <p> There are {this.state.movies.length} movies in the database</p>
     </div>
     )
    
    
    }


}

export default Movies
