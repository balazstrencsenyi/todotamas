import React from 'react';
import "./App.css";
import CreateDom from "./CreateDom";
import { GalleryContextProvider } from "./components/gallery-context";
import { auth } from "./firebase"; // Import the 'auth' object from firebase.js

function MyApp() {
  return (
    <>
      <GalleryContextProvider>
        <CreateDom auth={auth} /> 
      </GalleryContextProvider>
    </>
  );
}

export default MyApp;
