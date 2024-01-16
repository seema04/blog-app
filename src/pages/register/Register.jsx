import './Register.css';

const Register = () => {
  return (
    <div className='login'>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" placeholder='Enter email...' />
        </div>
        <div>
          <label>Username: </label>
          <input type="text" placeholder='Enter username' />
        </div>
        <div>
          <label>Create Password: </label>
          <input type="password" placeholder='Enter password...' />
        </div>
        <div>
          <label> Confirm Password: </label>
          <input type="password" placeholder='Enter password...' />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
