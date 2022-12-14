import React from "react";

function MostViewed() {
  return (
  <div className="container-fluid most-viewed">
    <h1>Most Viewed</h1>
    <div className="row">
      <div className="col-lg-4 col-md-12 col-sm-12">
        <img src="meme1.png" className="mw-image"></img>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12">
        <img src="meme2.png" className="mw-image"></img>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12">
        <img src="meme3.png" className="mw-image"></img>
      </div>
    </div>
  </div>
  );
}

export default MostViewed;
