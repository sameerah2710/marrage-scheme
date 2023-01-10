import React,{useState} from "react";
const Register =()=>{
    return(
      <>
     
      <nav>
            <div class="navbar">
                <div class="navbarHead">
                    <p >Marrage Scheme</p>
                </div>
                <div class="navbarRight">
                    <a href = ""><button class="button" >User</button></a>
                    <a href = ""><button class="button" >Admin</button></a>
                </div>
            </div>
        </nav>
     
       <div className="Register">
        <div>
        <label>Name:</label>
        <input
          required
          type="text"
          placeholder="Enter Your Name..."
          name="username"
          
        />
      </div>
      <div>
        <label>Age:</label>
        <input
        required
          type="number"
          placeholder="Enter Your Number..."
          name="age"
         
        />
      </div>
      <div>
        <label>Email:</label>
        <input
        required
          type="text"
          placeholder="Enter Your Email..."
          name="email"
         
        />
      </div>
      <div>
        <label>Profession</label>
        <select
        required
          placeholder="select Profession"
          name="porfession"
        >
          <option>Employed</option>
          <option>Self-Employed</option>
          <option>Business</option>
          <option>Other</option>
        </select>
      </div>
   
      <div>
        <label>City:</label>
        <input
        required
          type="text"
          placeholder="Enter Your City..."
          name="city"  
        />
      </div>
      <div>
        <label>Nationality</label>
        <input
        required
          type="text"
          placeholder="Nationality"
          name="nationality"  
        />
      </div>
      <div className="flex">
        <label className="block">Gender :</label>
        <div>
          <input
            type="radio"
            name="gender"
            value={"Male"}
          
          />
          <label>Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value={"Female"}
          
          />
          <label>Female</label>
        </div>
      </div>
   
      <div>
        <label>Upload file:-</label>
        <input
      
          type="file"
          name="photo"
        />
      </div>
     
      <button type="submit">Submit Now</button>
 </div>
      </>  
    );
};
export default Register;