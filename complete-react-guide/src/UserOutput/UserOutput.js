import React from 'react';
import './UserOutput.css';

const userOutput = (props) => { 
  return (
    <div className="UserOutput">
      <p>Lorem Ipsun</p>
      <p>The user name is {props.userName}</p>
    </div>
  );
  
};

export default userOutput;