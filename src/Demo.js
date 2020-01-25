import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Demo.css'


 const Demo =(props) =>{
     return(
         <div className="dem">
         <h1>hello {props.name}</h1>
         <p>i am from nepal</p>
        
         </div>
     )
 }
      



export default Demo;

