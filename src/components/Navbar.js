import React,{useState} from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes,FaGithub } from 'react-icons/fa'
import Logo from '../assets/logo.png'
import './NavbarStyles.css'
const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);

    
    return (
        <header>
            <nav className='navbar'>
            <div className='logo'>
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
                <ul className={click?"nav-menu active":"nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" spy={true} smooth={true} offset={50} duration={500} className='nav-link'>Home </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="faq" spy={true} smooth={true} offset={-70} duration={500} className='nav-link'>Skills </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="hee"  spy={true} smooth={true} offset={-70} duration={500} className='nav-link'>Projects </Link>
                    </li>
                    <li className='nav-item'>
                        <a href="https://github.com/imnrb" className='nav-link' target="_"><FaGithub></FaGithub> </a>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick} >
                    {click?(<FaTimes size={20} style={{color:"#ffffff"}} />):(<FaBars size={20} style={{color:"#ffffff"}}/>)}
                    
                </div>
            </nav>
        </header >
    )
}

export default Navbar