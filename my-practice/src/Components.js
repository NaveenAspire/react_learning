import React from 'react';

const FunctionalComponent1=(props)=>{
return <h1>This is the {props.name} functional Component</h1>
}
const FunctionalComponent2=(props)=><h1>This is the {props.name} functional componenet</h1>

class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:props.name}
    }
    hel=()=>this.setState({name: "Ram"})
    element =()=> <div>
    <h1>Called by { this.state.name} </h1>
    <FunctionalComponent1 name="Naveen"/>
    </div> 
    render(){
        this.hel();
        // return (
        //     this.element()
        //     )
            return <div>
                    <h1>Called by {this.state.name}</h1>
                    <FunctionalComponent1 name="Naveen" />
            </div> 
    }
}

export {FunctionalComponent1,FunctionalComponent2};
export default ClassComponent;
