import React from "react";

export default class LifeCycle extends React.Component{
    constructor(props){
        console.log("Constructor called...")
        super(props)
        this.state = {hel:"",hello:"Guest"}

        this.changeState = this.changeState.bind(this)
    }
    componentWillMount(){
        console.log("Will Mount called...")
    }
    componentDidMount(){
        console.log("Did mount called...")
    }
    changeState(e){
        console.log("Change state called...")
        console.log(e.target.value)
        this.setState({hello:e.target.value});
        
    }
    
    shouldComponentUpdate(){
        console.log("Should update called...")
        return true
    }
        componentWillUpdate(){
        console.log("Will update called...")
    }
    componentDidUpdate(){
        console.log("Did update called...")
    }
    
    render(){
        // this.changeState()
        return <>
            <input onChange={this.changeState}></input>
            <h1>Hello {this.state.hello}</h1>
        </>
    }

}