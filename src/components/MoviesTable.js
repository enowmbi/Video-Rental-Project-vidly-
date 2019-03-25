import React from 'react';
import Like from './common/Like'

const MoviesTable =(props)=>{
    return(
        <React.Fragment>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Qty in Stock</th>
                    <th>Rate</th>
                    <th/>
                    <th/>
                </tr>
            </thead>
            <tbody>
                {props.movies.map(movie =>(
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like movie={movie} onLike={props.onLiked}/></td>
                        
                        <td><button className="btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(movie._id)}>Delete</button> </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </React.Fragment>
    )
}

export default MoviesTable;
