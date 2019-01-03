import React from 'react';

import './Person.css';

const person = (props) => { 
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old. </p>
      <p onClick={props.click}>{props.children} </p>
      <input type="text" onChange={props.changed} value = {props.name} />
    </div>
  );
  
};

export default person;