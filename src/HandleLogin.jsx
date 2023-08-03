import { useState } from "react";
import React from 'react';
import "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const HandleLogin = ({ auth }) => { // Receive the auth object as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>Sign In</h1>
      <input type="text" placeholder="Type your Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Type your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </>
  );
}

export default HandleLogin;
