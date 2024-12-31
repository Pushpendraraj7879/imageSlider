import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const rightButton = (props) => {
  return (
<button onClick={props.handleRight} disabled={props.isDisable} style={props.style} ><FaArrowRight/></button>
  )
}

export default rightButton