import React from "react";
import { GameBoard, Square } from "../../design/HitTheMole";
const HitTheMole = () => {
  const holes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const [result, setResult] = useState(0)
  // const [speed, setSpeed] = useState(500)
  // const [hitPosition, setHitPosition] = useState()
  // const [currentTime, setCurrentTime] = useState(60)
  // const [timerID, setTimerID] = useState(null)
  // const [moleClass, setMoleClass] = useState(null)
  const handleMouseDown = (event) => {
    console.log(event.target.id);
    // if (event.target.id === hitPosition) {
    // setResult(result + 1)
    // }
  };

  const boxes = holes.map((hole) => (
    <Box id={hole} key={hole} onMouseDown={handleMouseDown} />
  ));

  return <GameBoard>{boxes}</GameBoard>;
};

function Box() {
  // const [active, setActive] = useState(false)
  /**
   
   useEffect(()=>{
     if (props.id.toString() === props.mole) {
       setActive(true)
      }
      
    },[active])
    */
  return <Square />;
}
export default HitTheMole;
