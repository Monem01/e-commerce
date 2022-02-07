import './login.css'
import {useState} from 'react';
 const Login = ({setAuth})=>{
  const[username,setUsername]=useState();
  const[passeword,setPasseword]=useState();
  function login(e){
    let user=document.getElementById('user').value;
    let pass=document.getElementById('pass').value;
    setUsername(user);
    setPasseword(pass);
    console.log('hello')
    username === 'admin' && passeword === 'admin' && 
    setAuth(true)
   }
    return <div className="conatinerlogin"><div className="center">
    <h1>Login</h1>
    <form >
      <div className="txt_field">
        <input type="text" id="user" required/>
        <span></span>
        <label>Username</label>
      </div>
      <div className="txt_field">
        <input type="password" id="pass" required/>
        <span></span>
        <label>Password</label>
      </div>
      <div className="pass">Forgot Password?</div>
      <input type="button" value="Login" onClick={()=>login()}/>
      <div className="signup_link">
        Not a member? <a href="#">Signup</a>
      </div>
    </form>
  </div>
  </div>
}
export default Login