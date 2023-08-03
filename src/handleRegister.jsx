import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import React from 'react';
import "firebase/auth";

const Register = ({ auth }) => { // Receive the auth object as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-container">
      <form onSubmit={register}>
        <h1>Sign Up</h1>
        <input type="email" placeholder="Type your Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Type your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
