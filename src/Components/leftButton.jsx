import React from 'react'
import { FaArrowLeft } from "react-icons/fa";


const leftButton = (props) => {
  return (
    <button onClick={props.handleLeft} disabled={props.isDisable}  style={props.style}><FaArrowLeft/></button>
  )
}

export default leftButton