import './Contact.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter , FaMailBulk, FaAddressBook, FaPinterest} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="left">
        <h4>Contact Information</h4>
        <p>Fill up the form and our team will get back to you in 24 hours.</p>
        <div>
          <FaPhoneAlt />
          <span>+01 234 567 891</span>
        </div>
        <div>
          <FaMailBulk />
          <span>info@help.com</span>
        </div>
        <div>
          <FaAddressBook />
          <span>203 St. Mountain View, San Francisco, California, USA</span>
        </div>
        <div className='social-icons'>
          <FaFacebook  className='icon'/>
          <FaTwitter className='icon' />
          <FaInstagram  className='icon'/>
          <FaLinkedin className='icon' />
          <FaPinterest className='icon' />
        </div>
      </div>

      <div className="right">
        <form className='contact-form'>
          <div>
            <label>First Name: </label>
            <input type="text" placeholder='first name' />
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" placeholder='Last name' />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" placeholder='Enter email' />
          </div>
        </form>

        <div>
          <textarea placeholder='Write Your message....'/> 
        </div>

        <button>Send Message</button>
      </div>
    </div>
  )
}

export default Contact
