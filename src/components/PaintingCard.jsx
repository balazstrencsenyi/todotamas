import React from "react";

function PaintingCard(props) {
  const paintings = props.paintings;

  return (
    <>
      {paintings.map((pnt) => (
        <div className="imageCard" key={pnt.id}>
          <img
            src={pnt.src}
            className={`paintings ${pnt.className}`} // Add the className property to the img tag
            alt="Image of the painting"
          />
          <div className="imageText">
            <div className="imageTitle">{pnt.name}</div>
            <div className="imageDescription">{pnt.descr}</div>
            <div className="imageSize">Size: {pnt.size}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PaintingCard;
