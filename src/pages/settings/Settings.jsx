import './Settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { FaEdit, FaUser } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settings-wrapper">
        <div className='profile-container'>
          <div className='update-cat'>
            <span>Update Account</span>
            <span>Delete Account</span>
          </div>
          <form>
            <div>
            <img src="https://images.pexels.com/photos/13069698/pexels-photo-13069698.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <label htmlFor="fileInput">
              <FaEdit  className='icon'/>
            </label>
            <input type="file" id="fileInput" style={{display: 'none'}} />
            </div>
            <label>Username: </label>
            <input type="text" placeholder='Enter username' />
            <label>Email: </label>
            <input type="email" placeholder='Enter Email' />
            <label>Password: </label>
            <input type="password" placeholder='Enter Password' />
            <button>Update</button>
          </form>
         </div>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
