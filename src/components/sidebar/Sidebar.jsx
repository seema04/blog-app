import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-item">
        <span>About Me</span>
        <img src='https://images.pexels.com/photos/4273464/pexels-photo-4273464.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iste, natus quam amet perferendis dicta ea deserunt ex odio quod nobis quas ratione, modi sed?</p>
      </div>
      <div className="sidebar-item">
        <span>Categories</span>
        <ul>
           <li>Life</li>
           <li>Tech</li>
           <li>Music</li>
           <li>Sports</li>
           <li>Fashion</li>
           <li>News</li>
           <li>Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span>Follow Us</span>
        <div className="social-media">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaPinterest />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
