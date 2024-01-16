import './Write.css';
import {FaPlus} from 'react-icons/fa'

const Write = () => {
  return (
    <div className='write'>
      <img src="https://images.pexels.com/photos/364091/pexels-photo-364091.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <form>
        <div className="write-form-grp">
          <label htmlFor="fileInput">
            <FaPlus className='icon'/>
          </label>
          <input type="file" id='fileInput' style={{display:'none'}} />
          <input type="text" placeholder='Enter Title' className='writeInput' autoFocus={true} />
        </div>
        <div className="write-form-grp">
          <textarea type="text" placeholder='Your story...'></textarea>
        </div>
        <button>Publish</button>
      </form>
    </div>
  )
}

export default Write
