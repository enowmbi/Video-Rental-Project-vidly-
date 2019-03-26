import React,{ Component } from 'react';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';


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
            <TableBody data={this.props.movies} onLike={this.props.onLike} onDelete={this.props.onDelete} />
        </table>
    </React.Fragment>
        )
    }
}

export default MoviesTable;
