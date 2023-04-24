// atributo children

import React from 'react';
import "./Title.css"

function Title (props) {
  return (
    <div>
      <h1 className='title-color'>{props.title}</h1>
      <p className='children-color'>{props.children}</p>
    </div>
  );
}

export default Title;