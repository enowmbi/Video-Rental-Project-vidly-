import React from 'react';
import Form from './common/Form';
import Joi from 'joi-browser';
import { getMovie,saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class MovieForm extends Form{
    state={
        data:{
            title:"",
            genreId:"",
            numberInStock:"",
            dailyRentalRate:""        
        },
        genres:[],
        errors:{}
    }

    schema={
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().min(0).max(100).required().label('Number in Stock'),
        dailyRentalRate: Joi.number().min(0).max(10).required().label('Daily Rental Rate')
    }

    componentDidMount(){
        //get genres
        const genres = getGenres();
        this.setState({genres: genres || {}})
        //get movie if not new
    let movie =''
        if(this.props.match.params.id !=='new'){
            movie = getMovie(this.props.match.params.id)
            if(!movie) return this.props.history.replace('/not-found')
        }
        else{
            return null;
        }
        this.setState({data: this.mapToViewModel(movie) || {} })
    }


    mapToViewModel(movie){
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate        
        }
    }

    doSubmit=()=>{
        saveMovie(this.state.data)
        this.props.history.push('/movies')
    }
render(){
    return(
        <div>
            <h1>Movie Form </h1>
            {this.renderInput('title','Title','','Enter Movie Title')}
            {this.renderSelect('genreId','Genre',this.state.genres)}
            {this.renderInput('numberInStock','Qty in Stock','','Enter Quantity in Stock')}
            {this.renderInput('dailyRentalRate','Rate','','Enter Daily Rental Rate')}
            {this.renderButton('Save')}
        </div>
           )
}
}

export default MovieForm

