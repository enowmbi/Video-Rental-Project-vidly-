import React from 'react';

const ListGroup = (props) =>{
    return(
        <div className="list-group m-4">
            {props.items.map(item=>(
                <li key={item[props.valueProperty]}
                    style={{cursor: "pointer"}}
                    className={props.selectedGenre === item?"list-group-item active":"list-group-item"} 
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

