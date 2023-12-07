import React, { useState } from "react";
function Register(){
    const [un,setu]=useState({us:'',pa:''})
    function changing(event){
         setu({...un,[event.target.name]:event.target.value})
        console.log(event.target.value)
    }
    return(
        <div>
          <h1>register{un.us}</h1>
          <form>
            <label htmlFor="username">username:</label>
            <input 
            type="text"
             id="username"
            placeholder="username"
            value={un.us}
            name="us"
            onChange={changing}

               />
                <input 
            type="password"
             id="password"
            placeholder="password"
            name="pa"
            value={un.pa}
            onChange={changing}

               />
               


          </form>
        </div>

    )
}
export default Register