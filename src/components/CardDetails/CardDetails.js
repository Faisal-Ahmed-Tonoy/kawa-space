import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const CardDetails = (props) => {
    const {title,last,first,image,gender,email }= props;


   
     
   
   
 return (

    
<div className="col-lg-3 mt-3"   onClick= {() => props.handleOnClick(props.cards)}   >
   
    <div className="card"   >
        <p className="text-capitalize"> {gender}-NL</p>
        <p> {title} {first} {last}</p>
        <p>{email} </p>
   </div>
    
</div>
     
      
    );
};

export default CardDetails;