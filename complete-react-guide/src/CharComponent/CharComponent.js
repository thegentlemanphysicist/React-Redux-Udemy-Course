import React from 'react';

import './CharComponent.css';

const charComponent = (props) => {
  return (
    <div className = "CharComponent" >
      <p>The character is {props.char}</p>
      <p onClick={props.click}>Delete this character!</p>
    </div>
  );
};

export default charComponent;