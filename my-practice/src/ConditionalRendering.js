import React, { Component } from "react";

export default class ConditionalRendering extends Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIN : false}
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    login(){
        this.setState({isLoggedIN:false})
        console.log(this.state.isLoggedIN)
    }
    logout(){
        this.setState({isLoggedIN:true})
        console.log(this.state.isLoggedIN)
    }
    render(){
        const isLoggedIn = this.state.isLoggedIN
        if (isLoggedIn)
        return <>
        <h1>Please Login</h1>
        <LoginButton onClick={this.login}/> 
        </>
        
        return <>
        <h2>Welcome!</h2>
        <LogoutButton onClick={this.logout}/>
        </>
    }
}

function LoginButton(props){
    return <button onClick={props.onClick}>LOGIN</button>
}

function LogoutButton(props){
    return <button onClick={props.onClick}>LOGOUT</button>
}