/* import React, { useState } from "react";
function Login(){
  function handle(e){
    
    setstate({...state,[e.target.name]:e.target.value})
  }
  const [state,setstate]=useState({username:"",password:""})
  const [usersindb,setusers]=useState([])

  
  let send=()=>{
    fetch("http://localhost:4000/regist",{
      method:"post",
      body:JSON.stringify(state),
      headers:{"content-type":"application/json"}
    }).then((d)=>d.json()).then(dd=>setusers([...usersindb,dd])).catch(error=>console.log(error));
  }

  React.useEffect(()=>{
    fetch("http://localhost:4000/regist")
    .then((d)=>d.json()).then((dd)=>setusers(dd)).catch(error=>console.log(error));
  },[])
    return(
        <div>
          <h1 className="login" >login</h1>
          <input type="text" name="username" value={state.username} onChange={handle}/>
          <input type="password" name="password" value={state.password} onChange={
            handle
          }/>
          <button value="login" onClick={send} >send</button>
          {JSON.stringify(usersindb,null,2)}


        </div>

    )
}
//export default Login */