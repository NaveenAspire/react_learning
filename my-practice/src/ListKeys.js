import React from "react";

export default class ListKeys extends React.Component{
    constructor(props){
        super(props);
        this.state = {list_items:['Naveen','Hello','Good']}
    }
    render(){
        const listTag = this.state.list_items.map((item)=>{
        console.log(item.toString())
        console.log("printed")
        return <li key={item.toString()}>{item}</li>
    })
        return <>
        <ol>{listTag}</ol></>
    }

}