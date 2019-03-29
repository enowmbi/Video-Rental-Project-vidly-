import React, { Component } from 'react';
import Input from './common/Input';

class Login extends Component{

    state={
        account:{
            username: "",
            password: ""
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("submitted")
    }

    handleChange=(e)=>{
        const account ={...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value
        this.setState({account: account})
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
                    /> 

                <Input name="password" 
                    label="Password" 
                    type="password" 
                    onChange={this.handleChange} 
                    value={this.state.account.password} 
                    placeholder="Password"
                /> 

            <button type="submit" className="btn btn-primary">
                Submit
            </button>

        </form>
    </div>
        )

    }

}
export default Login
