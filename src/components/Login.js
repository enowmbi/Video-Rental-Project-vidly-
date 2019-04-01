import React, { Component } from 'react';
import Input from './common/Input';
import Joi from 'joi-browser';

class Login extends Component{

    state={
        account:{
            username: "",
            password: ""
        },
        errors:{}
    }

    schema ={
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')    
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const errors = this.validate()
        console.log(this.validate())
        this.setState({errors: errors || {}})
        if(errors) return ;

        console.log("submitted")
    }

    validate =()=>{
        const errors ={}
        const results = Joi.validate(this.state.account, this.schema,{abortEarly: false})
        if(!results.error) return null;
        const newErrors = results.error.details.map(detail =>(
            errors[detail.path[0]] = detail.message        
        ))
        return newErrors;
    }


    validateProperty=({ name,value })=>{
        //we've extracted or destructured the argument that we'll receive which should be the sender - e.target
        /* we've destructured the argument we'll received i.e. e.target - the caller 
         *since we can't validate entire schema against single property we need to create a single property object and schema
         */

        const obj = {[name]: value}
        const schema = {[name]: this.schema[name]}
        const { error } = Joi.validate(obj,schema)
        return error ? error.details[0].message : null

    }

    handleChange=({currentTarget: input})=>{
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account ={...this.state.account}
        account[input.name] = input.value
        this.setState({account: account,errors:errors})
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
                        value={this.state.account.username}
                        placeholder="Enter Email"
                        error={this.state.errors.username }
                    /> 

                <Input name="password" 
                    label="Password" 
                    type="password" 
                    onChange={this.handleChange} 
                    value={this.state.account.password} 
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
