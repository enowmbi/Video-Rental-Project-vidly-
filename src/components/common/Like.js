import React from 'react';


const Like =(props)=>{
    return(
        <i className={props.movie.liked ?"fa fa-heart":"fa fa-heart-o"} aria-hidden="true" style={{cursor: "pointer"}} onClick={()=>props.onLike(props.movie)}></i>
    )
}

export default Like
