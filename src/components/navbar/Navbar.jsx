import './navbar.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = true;
  return (
    <nav>
      <div className="nav-left">
        {user ? (
         <Link to='settings'>
          <img src="https://images.pexels.com/photos/13069698/pexels-photo-13069698.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
         </Link> ) : (
         <ul>
            <Link to='login' className='link'>Login</Link>
            <Link to='register' className='link'>Register</Link>
          </ul>
        ) } 
        <FaInstagram className='icon'/>
        <FaTwitter className='icon' />
        <FaFacebook className='icon' />
        <FaLinkedin className='icon' />
        <FaPinterest className='icon' />
      </div>

      <div className="nav-center">
        <div>
          <FaSearch className='search-icon' />
          <input type="text" placeholder='Search...'/>
        </div>
      </div>

      <div className="nav-right">
        <ul>
            <Link to='/' className='link'>Home</Link>
            <Link to='about' className='link'>About</Link>
            <Link to='write' className='link'>Add New Post</Link>
            <Link to='contact' className='link'>Contact</Link>
            <Link to='*' className='link'>{user && "Logout"}</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar