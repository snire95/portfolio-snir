import "./intro.scss"
import { init } from 'ityped'
import { useRef, useEffect } from "react"

export default function Intro() {
 const textRef = useRef();
 useEffect(() => {
 init(textRef.current, { 
  showCursor: true, 
  backDelay:1500,
  strings: ['React.js', 'Node.js', 'JavaScript', 'css', 'Html', 'MongoDb', 'Firebase','MySql','AWS server', 'Python' ] })

 }, [])
 return (
  <div className="intro" id="intro">
   <div className="left">
   <div className="imgContainer">
    <img src="assets/snir.png" alt=""/>
   </div>
   </div>
   <div className="right">
    <div className="wrapper">
     <h2>Hi There, I'm</h2>
     <h1>Snir Elmaliah</h1>
     <h3>Full Stack Developer <span ref ={textRef}></span></h3>
     </div>

     <a href="#portfolio">
      <img src="assets/down-arrow.png" alt="" />
     </a>
   </div>
   
  </div>
 )
}
