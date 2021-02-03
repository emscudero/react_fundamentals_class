//imrs
import React, { useState } from "react";
import Login from "./Login/Login";
import SignUp from './Signup/Signup';

//sfc
const Auth = () => {
const [showLogin, setShowLogin] = useState(true);



function handleToggle(){
    
setShowLogin(!showLogin);

    /*if(showLogin === true){
        setShowLogin(false);
    }else{
        setShowLogin(true);
    }
 LONG VERSION*/
}
  return( 
  <div>
    {showLogin  ? <Login/> : <SignUp />}
  
<button onClick = {handleToggle}>Click To Toggle</button>
  </div>
  )};

export default Auth;
