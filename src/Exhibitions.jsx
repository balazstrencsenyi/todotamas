function Exhibitions() {
  return (
    <div className="pressContainer">
      <div className="pressCard">
        <img src="./src/images/press2.jpeg" className="press2" alt="" />
        <div className="pressTextContainer">
          <div className="pressTitle">OMEN EXHIBITION IN ART9 GALLERY </div>
          <div className="pressDate">Todor Tamas, 2023.06.20. Budapest</div>
        </div>
      </div>
      <div className="pressCard">
        <img src="./src/images/exhibition2.jpeg" className="press2" alt="" />
        <div className="pressTextContainer">
          <div className="pressTitle">SORA EXHIBITION IN QUADRO GALLERY </div>
          <div className="pressDate">Todor Tamas, 2018. Kolozsvár</div>
        </div>
      </div>
        <div className="pressCard" id="bottomCard">
        <img src="./src/images/exhibition3.jpeg" className="press2"  alt="" />
        <div className="pressTextContainer">
          <div className="pressTitle"> PRIVATE EXHIBITION IN SAATCHI GALLERY </div>
          <div className="pressDate">Todor Tamas, 2016. London</div>
        </div>
      </div>
        <div className="pressCard" id="bottomCard">
        <img src="./src/images/exhibition4.jpeg" className="press2"  alt="" />
        <div className="pressTextContainer">
          <div className="pressTitle">BACKYARD EXHIBITION IN QUADRO GALLERY </div>
          <div className="pressDate">Todor Tamas, 2014. Kolozsvár</div>
        </div>
      </div>
    </div>
  );
}

export default Exhibitions;
