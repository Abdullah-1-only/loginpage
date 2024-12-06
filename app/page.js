"use client"
import Login from "@/Components/Login";
import User from "@/Components/User";
import React, { useState } from "react";

const page = () => {
  const [user, setUser] = useState(false);

  const handlelogin=(email,password)=>{
    if (email == "ansari@gmail.com" && password == "123" ) {
      setUser("login conform")
    } else {
      alert("invalid email or password")
    }
    
  }

  return (
    <>

      {!user &&  <Login  handlelogin={handlelogin} />   }
      {user == "login conform"  &&  <User/> }

    
    </>
  );
};

export default page;
