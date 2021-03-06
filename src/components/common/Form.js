import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';
import Select from './Select';

class Form extends Component{
    state={
        data:{},
        errors:{}
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const errors = this.validate()
        // console.log(this.validate())
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
        // console.log(data)
        this.setState({data: data,errors:errors})
    }

    renderInput(name,label,type='text',placeholder){
        
       const { data,errors } = this.state
    return(
        <Input name={name} 
            label={label} 
            type={type} 
            onChange={this.handleChange}
            value={data[name]}
            placeholder={placeholder}
            error={errors[name] }
        /> 
    )

    }

    renderSelect(name,label,options){
        const { data, errors } = this.state
        return(
            <Select 
                name={name}
                label={label}
                options={options}
                onChange={this.handleChange}
                value={data[name]}
                error={errors[name]}
            />
            )
    }

    renderButton(label){
        return(
            <button 
                onClick={this.handleSubmit}
                type="submit"
                disabled={this.validate()}
                className="btn btn-primary">
                {label}
            </button>       
        )
    }

}
export default Form

