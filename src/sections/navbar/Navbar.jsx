import Logo from "../../assets/logo.jpg.png"
import data from "./data"
import { IoIosColorPalette } from "react-icons/io";
import './navbar.css'

const Navbar = () => {
  return (
   <nav>
    <div className='container nav__container'>
      <a href="index.html" className="nav__logo">
      <img src={Logo} alt="Logo"/>
      </a>
      <ul className="nav__menu"></ul>
      {
        data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
      }
    </div>
   </nav>
  )
}

export default Navbar
