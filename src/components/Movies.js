import React,{ Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/Pagination';
import { Paginate } from '../utils/Paginate';
import ListGroup from './common/ListGroup';
import MoviesTable from '../components/MoviesTable';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';


class Movies extends Component{
    state ={
        movies: [],
        pageSize: 4,
        currentPage:1,
        genres: [],
        selectedGenre: "",
        sortColumn:{column:'title',order:'asc'}
    }

    componentDidMount(){
        const genres = [{_id:'',name:"All Genres"},...getGenres()]
        this.setState({movies: getMovies(),genres: genres})
    }

    handleDelete=(id)=>{
        const movies = this.state.movies.filter(movie => movie._id !== id)
        this.setState({movies: movies})
    }

    handleLike=(movie)=>{
        const movies =[...this.state.movies]
        const index = movies.indexOf(movie)
        movies[index].liked = !movies[index].liked
        this.setState({movies: movies})
    }

    handlePageChange=(page) =>{
        this.setState({currentPage: page})   
    }

    handleGenreSelect=(genre)=>{
        this.setState({selectedGenre: genre, currentPage: 1})
    }

    handleSort = (sortColumn) => {
        this.setState({sortColumn: sortColumn})

    }

    render(){
                
        if(this.state.movies.length ===0){
            return <div className="container">
                <p>There are no movies in the database.</p>
                </div>
        }

        const filteredMovies = this.state.selectedGenre && this.state.selectedGenre._id ? this.state.movies.filter(m => m.genre._id === this.state.selectedGenre._id) : this.state.movies

        const sortedMovies = _.orderBy(filteredMovies,[this.state.sortColumn.column],[this.state.sortColumn.order])
        
        const movies = Paginate(sortedMovies,this.state.currentPage,this.state.pageSize)

        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-3">
                        <ListGroup
                            items={this.state.genres}
                            onItemSelect={this.handleGenreSelect}
                            textProperty="name"
                            valueProperty="_id"
                            selectedGenre ={this.state.selectedGenre}
                        /> 
                    </div>
                    <div className="col-md-9">
                <NavLink className="btn btn-primary my-2" to="movies/new">New Movie</NavLink>
                        <p className="my-4"> Showing {filteredMovies.length} {filteredMovies.length > 1? "movies" :"movie"} in the database.</p>
                        <MoviesTable
                            movies={movies}
                            onLike={this.handleLike} 
                            onDelete={this.handleDelete}
                            onSort ={this.handleSort}
                            sortColumn ={this.state.sortColumn}
                        />


                    <Pagination 
                        itemCount={filteredMovies.length}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Movies
