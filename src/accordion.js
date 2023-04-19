import React , { useState } from "react";

const Accordion = () => {
const [useMe , setuseMe] = useState(false) 
const [useMe2 , setuseMe2] = useState(false) 
const showMe = () => {
      setuseMe(!useMe)
      
}
const showMe2 =()=>{
    setuseMe2(!useMe2) 
}

return (
     <>
     <div style={{border : "1px solid black" , margin : "0px 250px"}}>
<h1 >pannel 1</h1>
<button onClick={showMe}> clickMe </button>
{useMe  ?  <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque rerum molestiae ducimus voluptatem earum quos exercitationem saepe quibusdam veniam illum facere labore modi, rem pariatur quae ad et? Inventore!  </p> : null}
</div>

<div style={{border : "1px solid black" , margin : "0px 250px"}}>
<h1 >pannel 2</h1>
<button onClick={showMe2}> clickMe </button>
{useMe2  ?  <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi neque rerum molestiae ducimus voluptatem earum quos exercitationem saepe quibusdam veniam illum facere labore modi, rem pariatur quae ad et? Inventore!  </p> : null}
</div>
</>
)
}
export default Accordion ;