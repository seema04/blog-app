import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" placeholder='Enter email...' />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" placeholder='Enter password...' />
        </div>
         <button>Login</button>
        <div>
          <p>New User? register here</p>
          <button>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Login
