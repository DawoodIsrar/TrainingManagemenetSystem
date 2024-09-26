
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {Button} from 'antd'
import { Link } from 'react-router-dom';



const Signup= () => {
  const [email, setEmail] = useState("ali@gmail.com");
  const [fname, setFName] = useState("Ali");
  const [lname, setLName] = useState("Jan");
  const [password, setPassword] = useState("123456");
  const [repassword, setRepassword] = useState("123456");


const handleSubmit = async (e) => {
  e.preventDefault();
  // console.table({ email, fname, lname, password,repassword });
try{
  await axios.post(`http://localhost:8000/api/register` , 
  {email,fname,lname,password,repassword});
 
  toast("Registration successful. please login");
} catch(err){
       toast(err.response.data)
}
};



  return (
    <> <div className=' main-div'>
    <div className="login-form">
<form>

<h4 className='login'>SignUp</h4>
<div className="input-container">
<label>Email </label>
<input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}  placeholder='Email' required />

</div>
<div className="input-container">
<label>Firstname </label>
<input value={fname}  onChange={(e) => setFName(e.target.value)} type="text" placeholder='First Name' required />

</div>
<div className="input-container">
<label>Lastname </label>
<input type="text" value={lname}  onChange={(e) => setLName(e.target.value)}  placeholder='Last Name' required />

</div>
<div className="input-container">
<label>Password </label>
<input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}  placeholder='Type Password' required />

</div>
<div className="input-container">
<label>Retype password </label>
<input type="password" value={repassword}  onChange={(e) => setRepassword(e.target.value)}  placeholder='Re-Type Password' required />

</div>
<div className="button-container">
<Button type='Submit' className='sign' onClick={handleSubmit}>Sign Up</Button>
</div>
<div className="button-signup">
<p>Did You Have Account ?<Link to={'/'}>Login</Link></p>
</div>
</form>
 </div>
</div>

</>
    // <>
    // <h1 className="jumbotron  text-center bg-primary square">Register</h1>
    // <div className='reg'>
    //     <div className='form'>
    //     <form className='regform' onSubmit={handleSubmit}>
    //         <div className='fields'>
    //         <input className='inputform' value={email}  onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'></input><br></br>
    //         <input className='inputform' value={fname}  onChange={(e) => setFName(e.target.value)} type="text" placeholder='First Name'></input><br></br>
    //     <input className='inputform' value={lname}  onChange={(e) => setLName(e.target.value)} type="text" placeholder='Last Name'></input><br></br>
        
    //     <input className='inputform' value={password}  onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Type Password' ></input><br></br>
        
    //     <input className='inputform' value={repassword}  onChange={(e) => setRepassword(e.target.value)} type="password" placeholder='Re-Type Password'></input><br></br>
    //         <button className='form-btn'>Create Account</button>
        
    //         </div>
      
    //     </form>
      
    //     </div>
    //     <div className='half'>
    //     <div className='half-card'>
    //         <h2>TMS </h2>
    //         <h4>Welcome to Training management system</h4>
    //     </div>
    //     </div>
    // </div>
    // </>
  )
}

export default Signup;