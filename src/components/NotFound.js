import React from 'react';
import { NavLink } from 'react-router-dom';


const NotFound =()=>{
    return(
        <div>
            <h1>Not Found</h1>
            <NavLink to="/movies" className="btn btn-primary my-4"> Back </NavLink>
    </div>
    )
}

export default NotFound
