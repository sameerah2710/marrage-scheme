import React,{useState} from "react";
const Login =()=>{
    return(
    
      <div className="Login">
     
            <div className="profile" style="height: 130px;padding: 30px;">
               
            <div style="margin: auto;">
                        <div>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                        </div>
                        <div>
                            <label for="email">e-mail:</label>
                        <input type="text" id="email" name="email" placeholder="e-mail"/>
                        </div>
                        <input type="button" value="submit" onclick="login()"/>   
            </div>
            </div>    
      
        </div>
    
      
    )
}
export default Login