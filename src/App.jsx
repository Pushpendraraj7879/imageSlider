import Card from "./Components/Card";
import LeftButton from "./Components/leftButton";
import RightButton from "./Components/rightButton";
import imageData from "./data";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import Dot from "./Components/dot"

function App() {
  const [currentImage,setCurrentImage]=useState(0)
  const handleLeft=()=>{
  setCurrentImage((prev)=>prev-1)
  }

  const handleRight=()=>{
    setCurrentImage((prev)=>prev+1)
  }
 console.log(imageData[currentImage].imageSrc)
  return (
    <div className="flex flex-col items-center  border-2 w-[400px] h-[400px] relative">
      <LeftButton  handleLeft={handleLeft} isDisable={currentImage==0} style={{position:"absolute",left:0,top:"40%"}}/>
      <Card url={imageData[currentImage].imageSrc} />
      <RightButton  handleRight={handleRight} isDisable={currentImage==9} style={{position:"absolute",right:0,top:"40%"}}/>
     <Dot currentImage={currentImage}/>
    </div>
  );
}

export default App;
