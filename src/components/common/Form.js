import React, { Component } from 'react';
import Joi from 'joi-browser';

class Form extends Component{
 state={
     data:{},
     errors:{}
 }

    handleSubmit=(e)=>{
        e.preventDefault();
        const errors = this.validate()
        console.log(this.validate())
        this.setState({errors: errors || {}})
        if(errors) return ;

       this.doSubmit()
    }

    validate =()=>{
        const errors ={}
        const results = Joi.validate(this.state.data, this.schema,{abortEarly: false})
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

        const data ={...this.state.data}
        data[input.name] = input.value
        this.setState({data: data,errors:errors})
    }

}
export default Form

