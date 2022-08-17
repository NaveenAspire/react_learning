import React, { Component } from "react";

export default class LiftingStateUp extends Component{
    constructor(props){
        super(props)
        this.state = {text:""}
        this.changeText = this.changeText.bind(this)
    }
    changeText(e){
        this.setState({text:e.target.value})
    }
    render(){
        return(
            <>
              <Input changeText={this.changeText} text={this.state.text}/>
              <Output text={this.state.text} />
            </>
        )
    }
}

class Input extends Component{
    render(){
        return(
            <>
                <input required onChange={this.props.changeText}></input>
            </>
        )
    }
}

class Output extends Component{
    render(){
        return(
            <>
                <p><h2>Text that you are typing : </h2>{this.props.text}</p>
            </>
        )
    }

}