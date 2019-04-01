import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';

class Login extends Form{

    state={
        data:{
            username: "",
            password: ""
        },
        errors:{}
    }

    schema ={
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')    
    }

    doSubmit=()=>{
        //do something upon form submission
        console.log("Submitted")
    }

    render(){
        return(
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username','Username','Enter Email')}
                    {this.renderInput('password','Password','password','Enter Password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        )

    }

}
export default Login
