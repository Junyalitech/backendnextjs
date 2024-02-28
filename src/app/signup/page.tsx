'use client'
import Link from "next/link";
import React, { useEffect } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router=useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDisabled,setButtonDisabled]=React.useState(false);

  const [loading,setLoading]=React.useState(false);
  const onSignUp = async () => {
       try{
        setLoading(true);
       const response= await axios.post("/api/users/login",user)
      console.log("signup success",response);
      router.push("/login");
      }catch(error:any){
          toast.error(error.message);
          toast.error(error.message);
       }finally{
        setLoading(false);
       }
  }
  useEffect(()=>{
  if(user.email.length>0 && user.password.length>0 && user.username.length>0){
    setButtonDisabled(false);
  }else{
    setButtonDisabled(true);
  }
  },[user]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading ? "processing":"signup"}</h1>
        <hr/>
        <label htmlFor="username">username</label>
        <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e)=>setUser({...user,username:e.target.value})}
        placeholder="username"
        />

<label htmlFor="email">Email</label>
        <input
        id="email"
        type="email"
        value={user.email}
        onChange={(e)=>setUser({...user,email:e.target.value})}
        placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e)=>setUser({...user,password:e.target.value})}
        placeholder="password"
        />
        <button
        onClick={onSignUp}
        >{buttonDisabled ? "No signup":"signup"}</button>
        <Link href="/login">Visit LOgin page </Link>

      </div>
    </>
  );

}
