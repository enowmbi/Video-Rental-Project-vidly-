import React,{ Component } from 'react';
import Like from './common/Like';
import TableHeader from './common/TableHeader';


class MoviesTable  extends Component{

    columns =[
        {name:'title',label:'Title'},     
        {name:'genre.name',label:'Genre'},      
        {name:'numberInStock',label:'Qty in Stock'},      
        {name:'dailyRentalRate',label:'Rate'},      
        {key: 'like' },      
        {key:'delete' }      
    ]

    render(){
        return(
        <React.Fragment>
        <table className="table">
            <TableHeader 
                columns={this.columns}
                sortColumn={this.props.sortColumn}
                onSort={this.props.onSort}
            />

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
