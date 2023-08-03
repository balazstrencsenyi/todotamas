function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactCardContainer">
        <div className="contactCard">
          <div className="contactText">
            {" "}
            <div className="contactTitle">Mobile:</div> +36 70 433 5399{" "}
          </div>
          <div className="contactText">
            {" "}
            <div className="contactTitle">Mail:</div> tamastodor1@gmail.com{" "}
          </div>
          <div className="contactText">
            {" "}
            <div className="contactTitle">Location:</div> Budapest, Hungary{" "}
          </div>
        </div>
      </div>
      <div className="iconContainer">
        <a href="https://www.instagram.com/tamas_todor/">
          {" "}
          <img src="./src/images/instagram.png" alt="" className="icons" />{" "}
        </a>
        <a href="https://www.facebook.com/todor.tamas.1">
          <img src="./src/images/facebook.png" alt="" className="icons" />{" "}
        </a>
      </div>
    </div>
  );
}

export default Contact;
