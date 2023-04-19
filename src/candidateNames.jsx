import React  from "react";
import './App';
const CandidateNames = (props) => {
 return (<>
     <div>
<ul>
   {props.newInputs.map((newInput ,index)=>(
    <li key = {index}> {newInput}  <input type= "checkbox" style={ {textDecoration: 'line-through' ,
     }}  onClick={props.stylingMe}  ></input> </li>
   ))}
</ul>
</div>
    </>);
 };
 
export default CandidateNames ;