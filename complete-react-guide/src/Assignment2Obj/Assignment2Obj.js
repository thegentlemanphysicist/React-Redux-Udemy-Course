import React from 'react'

const ass2Obj = (props) => {
  return (
    <div className="Assignment2Obj">
      <input type="text" onChange={props.changed} value = {props.content} />
      <p> The number of characters is: {props.length} </p>
    </div>
  );
};

export default ass2Obj;