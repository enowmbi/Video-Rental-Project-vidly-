import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';


const Pagination = (props) =>{
    const pagesCount = Math.ceil(props.itemCount / props.pageSize)

    if(pagesCount === 1) return null;

    const pages = _.range(1, pagesCount + 1)


    return( 
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {pages.map(page =>(
                    <li key={page} className= {props.currentPage === page ?"page-item active":"page-item"}>
                        <a className="page-link" href="#" onClick={()=>props.onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination
