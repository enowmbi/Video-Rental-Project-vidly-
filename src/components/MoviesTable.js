import React from 'react';
import Like from './common/Like'

const MoviesTable =(props)=>{
    return(
        <React.Fragment>
        <table className="table">
            <thead className="App-clickable">
                <tr>
                    <th onClick={()=>props.onSort('title')}>Title</th>
                    <th onClick={()=>props.onSort('genre.name')}>Genre</th>
                    <th onClick={()=>props.onSort('numberInStock')}>Qty in Stock</th>
                    <th onClick={()=>props.onSort('dailyRentalRate')}>Rate</th>
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
