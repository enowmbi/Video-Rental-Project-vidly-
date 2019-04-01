import React, { Component } from 'react';
import Input from './common/Input';
import Joi from 'joi-browser';
import Form from '../components/common/Form';

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
                    <Input name="username" 
                        label="Username" 
                        type="email" 
                        onChange={this.handleChange}
                        value={this.state.data.username}
                        placeholder="Enter Email"
                        error={this.state.errors.username }
                    /> 

                <Input name="password" 
                    label="Password" 
                    type="password" 
                    onChange={this.handleChange} 
                    value={this.state.data.password} 
                    placeholder="Password"
                    error={this.state.errors.password }
                /> 

            <button 
                type="submit"
                disabled={this.validate()}
                className="btn btn-primary">
                Submit
            </button>

        </form>
    </div>
        )

    }

}
export default Login
