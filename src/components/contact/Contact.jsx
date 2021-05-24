import { useState } from "react";
import "./contact.scss"
import emailjs from 'emailjs-com';

export default function Contact() {
 const [message, setMessage] = useState(false)

 const handSubmit =(e)=>{
  e.preventDefault();

  emailjs.sendForm("service_7kte6pi","template_v9ljk5h", e.target,"user_tE5C71oPQeinIiP9oRNri"
)
       .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  setMessage(true)

 }
 return (
  <div className="contact" id="contact">
   <div className="left">
    <img src="https://www.questel.com/wp-content/uploads/2019/08/contact-us.svg" alt="" />
   </div>
   <div className="right">
    <h2>Contact Us</h2>
    <form onSubmit={handSubmit}>
    <input 
     name = "name"
     type="text" 
     placeholder="Full Name"             
 />
     <input 
     name = "email"
     type="email" 
     placeholder="Email"             
 />

     <textarea 
     name="message" 
     placeholder="Message" 
></textarea>
     <button type="submit">Submit</button>
     {message && <span>Thanks, I'll reply Snir </span>}


    </form>
   </div>
   
  </div>
 )
}
