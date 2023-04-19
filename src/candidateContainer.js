
import React, {  Component } from "react";
import CandidateNames from "./candidateNames";
 


class CandidateContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 0 ,
            inputValue: "" ,
        };
    this.increment = this.increment.bind(this);
    // this.change = this.change.bind(this)
    }

    increment(){
           
            this.setState({number: this.state.number + 1})
        // this.setState((newState)=>{
        //     return { Number: newState.number + 1};
        // })
    }
    // change(){
    //     this.setState({inputValue: this.state.inputValue })
    // }
    render (){
        return <>
        <CandidateNames  />
        {/* <h1><center>{this.state.number}</center></h1>, */}
        {/* <CandidateNames CandidateNames={this.increment}/> */}
        {/* <button onClick={this.increment}>ADD</button>, */}
        {/* <input type={Text} onChange={this.change}></input> */}
        
        </>
        }
}
export default CandidateContainer ;