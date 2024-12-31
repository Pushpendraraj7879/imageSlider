import imageData from "../data"
import { GoDotFill } from "react-icons/go";

const dot = (props) => {
  return (
    <div className="flex gap-1">{imageData.map((item,i)=>(
        <GoDotFill key={i} style={{color:(props.currentImage==i)?"blue":null}}/>
   ))}</div>
  )
}

export default dot