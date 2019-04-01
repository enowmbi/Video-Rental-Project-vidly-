import React from 'react';


const SearchBox =(props)=>{
    return(
        <input
            type="text" 
            placeholder="Search ..."
            name={props.name}
            value={props.value}
            className="form-control my-3"
            onChange={(e)=>props.onChange(e.currentTarget.value)}
        />
    
    
    )

}

export default SearchBox
