import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component{
 state ={
  movies: getMovies()
 }

    render(){
     return(
         <div>
             <p> Showing {this.state.movies.length} movies in the database</p>

            
     </div>
     )
    
    
    }


}

export default Movies
