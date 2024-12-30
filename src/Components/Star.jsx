import { FaStar } from "react-icons/fa6";

const Star = (props) => {
     return (
    <button onClick={props.onToggle}  onMouseEnter={props.onHover} value={props.value} ><FaStar style={props.style} size={40}/></button>
  )
}

export default Star