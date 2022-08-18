import React, { Component } from "react";
import { Route,Link, Switch , } from 'react-router-dom'

export class Home extends Component{
    render(){
        return <>
        <h1>Welcome to Home Page!</h1></>
    }
}

export class About extends Component{
    render(){
        return <>
        <h1>Welcome to About Page!</h1></>
    }
}

export class Profile extends Component{
    render(){
        return <>
        <h1>Welcome to Profile Page!</h1></>
    }
}


export function Routers(){
    return <>
    <Route exact path={'/'}><Home/></Route>
      <Route exact path={'/about'}><About/></Route>
      <Route exact path={'/profile'}><Profile/></Route></>
}