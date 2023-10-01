import React, { useContext, useEffect, useState } from 'react'
import { PortContext } from '../context/portContext';

const CursorTrack = () => {

  const {theme} = useContext(PortContext);
  const[position, setPosition] = useState({x:0, y:0});

  useEffect(() => {

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }; 
  
  window.addEventListener('mousemove', handleMouseMove); 

  }, []);
    

  return (
    <div 
    className={`cursor-track ${theme && 'cursorTrackDark'}`}
    style={{left: `${position.x}px`, top: `${position.y}px`}}>
    </div>
  )
};

export default CursorTrack;
