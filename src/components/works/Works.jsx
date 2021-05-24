import { useState } from "react"
import "./works.scss"

export default function Works() {
 const [currentSlider, setCurrentSlider] = useState(0)
 const data = [
  {
   id: "1",
   icon:"./assets/html-coding.png",
   title:"web Design",
   desc:"vef efer knoo fefv rfvrf rbvr rbbvr rbrg rvrv rrtb rbrgb wddw wfev dwe ",
   img:"https://firebasestorage.googleapis.com/v0/b/gallery-7108c.appspot.com/o/%D7%9C%D7%9C%D7%90%20%D7%A9%D7%9D.png?alt=media&token=3924e0ff-9892-4972-aae3-6972662f4dff",
  },
    {
   id: "2",
   icon:"./assets/internet.png",
   title:"LOGO Design",
   desc:"vef efer knoo fefv rfvrf rbvr rbbvr rbrg rvrv rrtb rbrgb wddw wfev dwe ",
   img:"https://firebasestorage.googleapis.com/v0/b/gallery-7108c.appspot.com/o/%D7%9C%D7%9C%D7%90%20%D7%A9%D7%9D.png?alt=media&token=3924e0ff-9892-4972-aae3-6972662f4dff",
  },
    {
   id: "3",
   icon:"./assets/smartphone.png",
   title:" Design",
   desc:"vef efer knoo fefv rfvrf rbvr rbbvr rbrg rvrv rrtb rbrgb wddw wfev dwe ",
   img:"https://firebasestorage.googleapis.com/v0/b/gallery-7108c.appspot.com/o/%D7%9C%D7%9C%D7%90%20%D7%A9%D7%9D.png?alt=media&token=3924e0ff-9892-4972-aae3-6972662f4dff",
  },
 ];

 const handleClick = (way) => {
 way === "left" 
 ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) 
 : setCurrentSlider(currentSlider <data.length - 1 ? currentSlider + 1 : 0);
 };

 return (
  <div className="works" id="works">
   <div className="slider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
    {data.map(d=>(
    <div className="container">
     <div className="item">
      <div className="left">
       <div className="leftContainer">
        <div className="imgContainer">
         <img src={d.icon} alt=""/>
        </div>
       <h2>{d.title}</h2>
       <p>
      {d.desc}
       </p>
       <span>Projects</span>
      </div>
      </div>
      <div className="right">
         <img
           src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
          alt=""
        />
      </div>
     </div>
    </div>
       ))}
   </div>
   <img src="assets/next.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
   <img src="assets/next.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
  </div>
 )
}
