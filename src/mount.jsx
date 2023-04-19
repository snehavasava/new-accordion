import React   from "react";
// import CandidateNames from "./candidateNames";



 
class Mount extends React.Component{
            constructor(props){
                super(props);
                this.state = {
                  gateName : "" ,
                  newInputs :[],
                  isChecked : [] ,
                  name : [ ] ,
                  inActives : [ ],
                   
                  }
                this.taken = this.taken.bind(this)
                this.addme =this.addme.bind(this)
                this.removeMe = this.removeMe.bind(this)
                this.stylingMe =this.stylingMe.bind(this)
                this.inactive = this.inactive.bind(this)
            }
            taken(name){
                this.setState({gateName: name.target.value })

            }  
            addme(){
               
                this.setState({
                   
                 newInputs : [ ...this.state.newInputs  , this.state.gateName , ] ,
                 
                 gateName: " " })
                }  
                removeMe(){
                    this.setState({ newInputs : [ ]})
                } 
            
          
stylingMe (event){
    
 const boxcheck = event.target.value ;
 const me =  event.target.checked ;
//  this.setState({isChecked : event.target.checked})
if (me === boxcheck) {
    this.setState({ inActives : [...this.state.newInputs] , })
    
    
// }else{
//     this.setState({ newInputs : [...this.state.newInputs]}) 
// }
// };
   
}

}  

            // stylingMe = event => {
            //     
            //    if (event.target.checked) {
            //           event.target.style.removeProperty('text-decoration');
            //         } else {
            //           event.target.style.setProperty('text-decoration', 'line-through');
            //         }
            //       };
            
            inactive(event){
                this.setState({ isChecked : !this.state.isChecked})

if (event.target.checked) {
    this.setState({ newInputs : [...this.state.inActives ] ,})
}else{
    this.setState({inActives : [ ]})
}
   
    
    

            } 
                  
render(){   
        
     return <>
    <h3>ACTIVE TASK </h3>
<input type="text"  value={this.state.gateName} onChange={this.taken}></input>
<button onClick={this.addme}>ADD</button>
<button onClick={this.removeMe}>RESET</button>
{<div>
<ul>
   {this.state.newInputs.map((newInput , index )=>(
    <li key = {newInput} style={{textDecoration : this.state.isChecked  ? "line-through" : "none"}}  > <span>{newInput} </span> 
    <span  ><input type= "checkbox" id="isChecked" onChange={this.stylingMe}  
     
   ></input></span> 
</li>  
   ))}  
</ul>  
</div>} 
<h3>INACTIVE TASK</h3> 
{<div>
<ul>
   {this.state.inActives.map((inActive , index )=>(
    <li key = {inActive}  > <span>{inActive} </span> 
    <span  ><input type= "checkbox"  onChange={this.inactive} defaultChecked={index}
     
   ></input></span> 
</li>  
   ))}  
</ul>  
</div>} 
{/* <CandidateNames newInputs={this.state.newInputs} /> */} 

     </>

}

}

export default Mount ;