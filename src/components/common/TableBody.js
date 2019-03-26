import React,{ Component } from 'react';
import Like from '../common/Like';

class TableBody extends Component{

    render(){
        return(
        <tbody>
            {this.props.data.map(item =>(
                <tr key={item._id || item.key}>
                <td>{item.title}</td>
                <td>{item.genre.name}</td>
                <td>{item.numberInStock}</td>
                <td>{item.dailyRentalRate}</td>
                <td><Like movie={item} onLike={this.props.onLike}/></td>
                <td><button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(item._id)}>Delete</button></td>

            </tr>
            
            
            ))}
        </tbody>
        
        
        
        )
    
    }

}

export default TableBody
