import React, { Component } from "react";

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {value:""}
        this.getChange = this.getChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    getChange(e){
        
        this.setState({value:e.target.value})
    }
    
    submitForm(){
        alert("Welcome "+this.state.value+"!")
    }

    render(){
        const form = <>
        <form action="" onSubmit={this.submitForm}>
            <label>Hello Welcome To Register</label>
            <br/><br/>
            <input required onChange={this.getChange}>
            </input>
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
        </>
        return form
    }
}