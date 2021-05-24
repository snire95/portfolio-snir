import "./menu.scss"
import { SocialIcon } from "react-social-icons";

export default function menu({menuOpen, setMenuOpen}) {
 return (
  <div className={"menu " + (menuOpen && "active")}>
   <ul>
    <li onClick={()=> setMenuOpen(false)}>
     <a href="#intro">Home</a>
    </li>
    <li onClick={()=> setMenuOpen(false)}>
     <a href="#portfolio">Portfolio</a>
    </li>    
    <li onClick={()=> setMenuOpen(false)}>
     <a href= "#works">Works</a>
    </li>    
    <li onClick={()=> setMenuOpen(false)}>
     <a href="#testimonials">Testimonials</a>
    </li>    
    <li onClick={()=> setMenuOpen(false)}>
     <a href ="#contact">Contact</a>
    </li>
    <li onClick={()=> setMenuOpen(false)}>
    
      <SocialIcon url= "https://github.com/snire95" className="icon" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}      />     
     <SocialIcon  className= "icon" url= "https://www.linkedin.com/in/snir-elmaliah-9924311a7/" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}   />     
     <SocialIcon  url= "https://www.facebook.com/snir.elmaliah/" className= "icon" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}   />
    <SocialIcon  url= "https://www.instagram.com/snir__el/" className= "icon" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}   />
    </li>
   </ul>
   
  </div>
 )
}
