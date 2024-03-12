import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footer'>
    <hr className='orange'/>
        <h5 style={{color:"#878989"}}>LIVELEEN KAUR ANAND </h5>
         <h6 className='light-colour-navbar'>Get in touch :   
         <i className="fa-brands fa-instagram fa-xl icon-color zoom" > </i> <Link className="light-colour-navbar" to="https://www.instagram.com/liveleenn"> Instagram </Link>
            <i className="fa-brands fa-github fa-xl icon-color icon-padding zoom" > </i> <Link className="light-colour-navbar" to="https://github.com/Live-25"> Github </Link> 
            <i className="fa-brands fa-linkedin-in fa-xl icon-color icon-padding zoom"></i> <Link className="light-colour-navbar" to="https://www.linkedin.com/in/liveleen-kaur-4b4033248"> Linkedin </Link>
       </h6>
    </div>
  )
}