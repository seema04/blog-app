import { FaAddressBook, FaInstagramSquare, FaNotesMedical, FaPhoneAlt, FaSearchLocation, FaTelegramPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='top'>
        <div className="left-sec">
          <div>
            <FaSearchLocation className='icon' />
            <h4>About</h4>
          </div>
          <div>
            <FaAddressBook className='icon' />
            <p>203 St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div>
            <FaPhoneAlt className='icon' />
            <p>+2 392 392 921</p>
          </div>
          <div>
            <FaTelegramPlane className='icon'/>
            <p>info@yourdomain.com</p>
          </div>
        </div>

        <div className="center-sec">
          <div>
            <FaNotesMedical className='icon'/>
            <h4>Latest Posts</h4>
          </div>
          <div className='recent-posts'>
            <div>
              <img className='loc-img' src="https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='post-info'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium tempora. Impedit a explicabo provident voluptatum velit dolore sint maxime?</p>
              <small>Jan 12, 2023</small>
            </div>
          </div>
          <div className='recent-posts'>
            <img className='loc-img' src="https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='post-info'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, voluptatibus rerum! Aspernatur!</p>
              <small>Jan 12, 2023</small>
            </div>
          </div>
        </div>
 
       <div className="right-sec">
        <div>
          <FaInstagramSquare />
          <span style={{fontSize: '0.9rem', fontWeight: 'bold'}}>Instagram</span>
        </div>
        <div className='photo-gallery'>
          <img src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/4125993/pexels-photo-4125993.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <img src="https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
       </div>
      </div>
      <div className='copyright'>
         <p>Copyright &copy;2023 All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
