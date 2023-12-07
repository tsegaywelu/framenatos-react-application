import './Login.component.css';
import React, { useState } from "react";


function Login() {
  const [myname,setname]=useState('');
const [mypassword,setpassword]=useState('')
function handler(e){
  const value=e.target.value;
  const name=e.target.name;
  if(name=='username'){
  setname(value)
  }
  else if(name=='password'){
    setpassword(value)

  }
  
}
function validate(e) {
  
  fetch("http://localhost:4000/regist", {
    method: "POST",
    body: JSON.stringify({ password: mypassword }), // Adjust payload format
    headers: { "Content-Type": "application/json" }, // Correct header name
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("There was a problem with the fetch operation:", error)
    );
}


  return (
    <div>
      <h1>your name is {myname} and your password is  {mypassword}</h1>
      <div className="icons">
        <i className="fa-solid fa-address-book"></i>
        <label htmlFor="username"> username</label>
        <input  type="text"
         placeholder="type your name here" id="username"
          name='username' value={myname} onChange={handler}/><br />
      </div>
      <div className="icons">
        <label htmlFor="password"> password</label>
        <input type="password"
         placeholder="type your password here" id="password"
         name='password' value={mypassword} onChange={handler}/>
        <br /><br /><br />
        <br />
        <button onClick={validate}>login</button> <br /><br />
        <a href="register.html">forget password</a><br/><br/>
      </div>
    </div>
  );
}

export default Login;
