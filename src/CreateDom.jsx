import { useContext, useState, useEffect } from "react";
import Biography from "./Biography";
import Press from "./Press";
import Exhibitions from "./Exhibitions";
import Contact from "./Contact";
import Footer from "./Footer";
import LogInPage from "./LogInPage";
import RegisterPage from "./RegisterPage";
import { GalleryContext } from "./components/gallery-context";
import PaintingCard from "./components/PaintingCard";
import { PAINTINGS } from "./paintings";
import SearchField from "./components/SearchField";

function CreateDom({ auth }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState("WORKS");
  const [showRegisterPage, setShowRegisterPage] = useState(false);
  const [showLogInPage, setShowLogInPage] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false); // New state to track user's login status
  const { products } = useContext(GalleryContext);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleSignUpClick = () => {
    setShowRegisterPage(true);
    setShowLogInPage(false);
  };

const handleSignInClick = () => {
  if (userLoggedIn) {
    // If user is logged in, perform sign-out
    auth.signOut()
      .then(() => {
        // Sign-out successful
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        // Handle sign-out error
        console.error("Error signing out:", error.message);
      });
  } else {
    // If user is logged out, show login page
    setShowRegisterPage(false);
    setShowLogInPage(true);
  }
};


  const renderContent = () => {
    switch (selectedMenuItem) {
      case "WORKS":
        return (
          <div id="gallerySection">
            <div className="imageContainer">
              <PaintingCard paintings={products} />
            </div>
            <Footer />
          </div>
        );
      case "BIOGRAPHY":
        return (
          <>
            <Biography />
            <Footer />
          </>
        );
      case "PRESS":
        return (
          <>
            <Press />
            <Footer />
          </>
        );
      case "EXHIBITIONS":
        return (
          <>
            <Exhibitions />
            <Footer />
          </>
        );
      case "CONTACT":
        return (
          <>
            <Contact />
            <Footer />
          </>
        );
      default:
        return null;
    }
  };

  const searchFieldPlaceholder = (
    <div style={{ height: "40px", width: "340px" }} />
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      updateUserStatus(user);
    });
    return () => unsubscribe();
  }, [auth]);

  const updateUserStatus = (user) => {
    setUserLoggedIn(!!user); // Update the user's authentication status state
    const userStatusElement = document.getElementById("userStatus");
    if (user) {
      userStatusElement.textContent = "You are logged in as " + user.email;
    } else {
      userStatusElement.textContent = "You are not logged in.";
    }
  };

  return (
    <>
   <img src="../src/images/background.jpeg" id="header-pic" alt="" />



      <div className="homeContainer">
        <div className="transparentContainer">
 <div className="authenticationContainer">
        {userLoggedIn ? (
          <button className="authButtons" onClick={handleSignInClick}>
            Sign Out
          </button>
        ) : (
          <button className="authButtons" onClick={handleSignInClick}>
            Sign In
          </button>
        )}
        <button className="authButtons" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
          <div id="userStatus"></div>
          <h1 className="TitleName">Todor Tamas</h1>
        </div>

        <div className="ImagesContainer">
          <div className="menuContainer">
            <ul>
              <li onClick={() => handleMenuItemClick("WORKS")}>WORKS</li>
              <li onClick={() => handleMenuItemClick("BIOGRAPHY")}>
                BIOGRAPHY
              </li>
              <li onClick={() => handleMenuItemClick("PRESS")}>PRESS</li>
              <li onClick={() => handleMenuItemClick("EXHIBITIONS")}>
                EXHIBITIONS
              </li>
              <li onClick={() => handleMenuItemClick("CONTACT")}>CONTACT</li>
            </ul>

            <img src="./src/images/signature.png" id="signature" alt="" />
            {selectedMenuItem === "WORKS" ? (
              <SearchField />
            ) : (
              searchFieldPlaceholder
            )}
          </div>
          {showRegisterPage && <RegisterPage auth={auth} />}
          {showLogInPage && <LogInPage auth={auth} />}
          {!showRegisterPage && !showLogInPage && renderContent()}
        </div>
      </div>
    </>
  );
}

export default CreateDom;
