import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component{
    state ={
        movies: getMovies()
    }

    handleClick=(id)=>{
        const movies = this.state.movies.filter(movie => movie._id !== id)
        this.setState({movies: movies})
    }

    render(){
        if(this.state.movies.length ===0){

            return <div className="container"><p className="m-4">There are no movies in the database.</p></div>
        }
        return(
            <div className="container">
                <p className="m-4"> Showing {this.state.movies.length} {this.state.movies.length > 1? "movies" :"movie"} in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Qty in Stock</th>
                            <th>Rate</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie =>(
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button className="btn btn-danger btn-sm m-2" onClick={()=>this.handleClick(movie._id)}>Delete</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )


    }


}

export default Movies
