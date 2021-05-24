import "./testimonials.scss"
export default function Testimonials() {
 const data = [
  {
   id:1,
   name:"martin horold",
   title:"CEO of ALBI",
   img:"assets/snir.png",
   icon:"assets/facebook.png",
   desc:"eferf rrr rvr v rvrgv rggv rggvrg rgbvg gbb gbb gb gvrfv grbvrgv"
  },
    {
   id:2,
   name:"martin horold",
   title:"CEO of ALBI",
   img:"assets/snir.png",
   icon:"assets/facebook.png",
   desc:"eferf rrr rvr v rvrgv rggv rggvrg rgbvg gbb gbb gb gvrfv grbvrgv",
   featured: true,

  },
    {
   id:3,
   name:"martin horold",
   title:"CEO of ALBI",
   img:"assets/snir.png",
   icon:"assets/facebook.png",
   desc:"eferf rrr rvr v rvrgv rggv rggvrg rgbvg gbb gbb gb gvrfv grbvrgv"
  },
 ]
 return (
  <div className= "testimonials" id="testimonials"> 
  <h1>Testimonials</h1>
  <div className="container">
   {data.map((d) => (
   <div className={d.featured ? "card featured" : "card"}>
    <div className="top">
     <img src="assets/right-arrow.png" alt="" className="left"/>
     <img src={d.img} alt="" className="user"/>
     <img src={d.icon} alt="" className="right"/>
    </div>
    <div className="center">
   {d.desc}
    </div>
    <div className="bottom">
     <h3>{d.name}</h3>
     <h4>{d.title}</h4>

    </div>
   </div>
   ))}
  </div>
   

  </div>
 )
}
