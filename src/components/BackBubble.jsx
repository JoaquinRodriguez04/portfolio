import React, { useContext } from 'react'
import { PortContext } from '../context/portContext';

const backBubble = () => {

  const {theme} = useContext(PortContext);

  return (
    <div className={`back-bubble ${theme && 'backBubbleDark'}`}>
    </div>
  )
};

export default backBubble;
