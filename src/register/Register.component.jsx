import './Register.styles.css'
import React, {useState} from "react"
function Registration(){
  // const [password,setPassword] =useState('')
   
  //  const [username,setUsername]=useState('');
  //  const[telephone,setTelephone]=useState('')
  //  const [email, setEmail] = useState('')
   
   const [accountInfo, setAccountInfo] = useState({
    name: '',
    password: '',
    telephone: '',
    email: ''
   })
  //  function changeHandler(e){
  //   const name = e.target.name
  //   const value = e.target.value
  //   if(name === 'username'){
  //     setUsername(value)
  //   }else if(name === 'password'){
  //     setPassword(value)
  //   }else if(name === 'telephone'){
  //     setTelephone(value)
  //   }else if(name === 'email'){
  //     setEmail(value)
  //   }
  function changeHandler(e){
    console.log('change')
    const name = e.target.name
    setAccountInfo({...accountInfo, [name]: e.target.value})
  }
    // er(e.target.value)
    // setTelephone(e.target.value);
    // console.log(telephone);
    
    //  }

function sender(e){
  e.preventDefault();
  fetch("http://localhost:4000/regist",{
      method:"post",
      body:JSON.stringify(accountInfo),
      headers:{"content-type":"application/json"}
    }).then((d)=>d.json()).then(dd=>console.log(dd)).catch(error=>console.log(error));
  }




      
return(
  
<form  onSubmit={sender} className='register-form'>
       <p>rigistraion form {accountInfo.password} <br /> {accountInfo.telephone} <br />{accountInfo.username}</p>
        <input type="text" 
        id="username"
         name="username"   placeholder="type your name" value={accountInfo.username} onChange={changeHandler} required/><br/>
        
        <input type="password"
         id="password"
          placeholder="type your password here" name="password" value={accountInfo.password} onChange={changeHandler} required /><br/>
        <input type="tel" name="telephone" id="telephone"  placeholder="type your phone"
         value={accountInfo.telephone} onChange={changeHandler} required/><br />
        <input type="email" id="email" onChange={changeHandler} value={accountInfo.email} name="email" placeholder="type your email " required/><br />
        <select name="country" id="country" aria-placeholder="select your country"  >
            <option value="ethiopia">Ethiopia</option>
            <option value="eretria">eretria</option>
            <option value="sudan" >sudan</option>
            <option value="america"> america</option>
            <option value="france">france</option>
        </select><br/>
        <button type="sub
        mit" value="register" /* onClick={Registration} */>submit</button><br />
        <a href="login.html">have account log in </a>
        </form>
)
}
export default Registration
