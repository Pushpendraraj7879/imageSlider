import React from 'react'
import { GoDotFill } from "react-icons/go";

const Card = (props) => {
  return (
    <div className='w-[100%] h-[100%]  overflow-hidden border-2'>
        <img src={props.url} alt="" />

    </div>
  )
}

export default Card
