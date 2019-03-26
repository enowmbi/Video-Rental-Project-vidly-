import React from 'react';

const ListGroup = (props) =>{
    return(
        <div className="list-group m-4">
            {props.items.map(item=>(
                <li key={item[props.valueProperty]}
                    className={props.selectedGenre === item?"list-group-item active App-clickable":"list-group-item App-clickable"} 
                    onClick={()=>props.onItemSelect(item)}>
                    {item[props.textProperty]}
                </li>
            ))}
        </div>)
}
ListGroup.defaultProps ={
    textProperty: 'name',
    valuProperty: '_id'
}

export default ListGroup;

