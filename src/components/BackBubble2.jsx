import React, { useContext } from 'react'
import { PortContext } from '../context/portContext';

const BackBubble2 = () => {
  const {theme} = useContext(PortContext);

  return (
    <div className={`back-bubble2 ${theme && 'backBubbleDark'}`}>
    </div>
  )
}

export default BackBubble2
