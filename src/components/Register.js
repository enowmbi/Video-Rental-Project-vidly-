import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';


class Register extends Form{
    state={
        data:{username:"",password:"",name:""},
        errors:{}
    }

    doSubmit=()=>{
        // console.log("Registration form submitted !")
    }

    schema={
        username: Joi.string().required().email().label('Username'),
        password:  Joi.string().min(5).required().label('Password'),
        name: Joi.string().required().label('Name')
    }

    render(){
        return(
            <div className="container">
                <h1>Register</h1>
                <form>
                    {this.renderInput('username','Username','',"Enter Email")}
                    {this.renderInput('password','Password','password','Enter Password')}
                    {this.renderInput('name','Name','','Enter Full name')}
                    {this.renderButton('Register')}
                </form>
            </div>
        ) 
    }
}

export default Register

