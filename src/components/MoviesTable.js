import React,{ Component } from 'react';
import Like from './common/Like';

class MoviesTable  extends Component{

    raiseSort=(column)=>{
      console.log(column)
        const sortColumn = {...this.props.sortColumn}
        if(column === sortColumn.column){
            sortColumn.order = (sortColumn.order ==='asc'?'desc':'asc')            
        }else
        {
            sortColumn.column = column
            sortColumn.order = 'asc'
        }
      this.props.onSort(sortColumn) 
    }


    render(){
        return(
        <React.Fragment>
        <table className="table">
            <thead className="App-clickable">
                <tr>
                    <th onClick={()=>this.raiseSort('title')}>Title</th>
                    <th onClick={()=>this.raiseSort('genre.name')}>Genre</th>
                    <th onClick={()=>this.raiseSort('numberInStock')}>Qty in Stock</th>
                    <th onClick={()=>this.raiseSort('dailyRentalRate')}>Rate</th>
                    <th/>
                    <th/>
                </tr>
            </thead>
            <tbody>
                {this.props.movies.map(movie =>(
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like movie={movie} onLike={this.props.onLiked}/></td>
                        <td><button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(movie._id)}>Delete</button> </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </React.Fragment>
        )
    }
}

export default MoviesTable;
