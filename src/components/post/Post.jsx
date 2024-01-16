import './Post.css';

const Post = () => {
  return (
    <div className='post'>
      <img src="https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className='post-info'>
        <div className="post-cat">
          <span>Music</span>
          <span>Life</span>
        </div>
        <span className="post-title">
          Lorem ipsum Dolore soluta corporis!
        </span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className='post-desc'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate recusandae obcaecati voluptas quae expedita quis nihil, distinctio, placeat laboriosam ipsa, nostrum dolore ea molestias! Nobis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo suscipit animi, at quisquam repellendus temporibus tenetur et rem cupiditate. Distinctio.
        Ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident, magni quis dolorum molestias sed beatae labore maxime!
      </p>
    </div>
  )
}

export default Post
