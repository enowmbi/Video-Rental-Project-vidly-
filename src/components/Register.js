import React,{ Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';


class Register extends Form{
    state={
        data:{username:"",password:"",name:""},
        errors:{}
    }

    doSubmit=()=>{
    console.log("Registration form submitted !")
    }

    schema={
        username: Joi.string().required(),
        password:  Joi.string().min(5).required(),
        name: Joi.string().required()
    }

    render(){
        return(
            <div className="container">
                <h1>Register</h1>
                <form>
            {this.renderInput('username','Username','',"Enter Username(email)")}
            {this.renderInput('password','Password','password','Enter Password')}
            {this.renderInput('name','Name','','Enter Full name')}
            {this.renderButton('Register')}
        </form>
    </div>
        ) 
    }
}

export default Register

