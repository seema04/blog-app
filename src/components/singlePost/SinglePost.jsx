import { FaEdit, FaTrash } from 'react-icons/fa';
import './SinglePost.css';

const SinglePost = () => {
  return (
    <div className='single-post'>
      <div className="single-post-wrapper">
        <img src="https://images.pexels.com/photos/11153461/pexels-photo-11153461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <h3>Spring Blossom
          <span className='edit-post'>
            <FaEdit className='icon'/>
            <FaTrash className='icon delete' />
          </span>
        </h3>
        <div className="single-post-info">
          <span>Author: Rachel Green</span>
          <span className='date'>1 hour ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae eius ab, tenetur iste aut? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit eum excepturi eveniet porro! Earum recusandae asperiores voluptatum quae sunt provident?</p>
      </div>
    </div>
  )
}

export default SinglePost
