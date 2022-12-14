import React from "react";

function LandingPage() {
  return (
  <div className="container-fluid landing-page">
    <div className="row">
        <div className="landing-text col-lg-6 col-md-12 col-sm-12">
            <h1>Partajarea de meme-uri nu a fost niciodată mai simplă!</h1>
            <p>Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.</p>
            <a href="#upload"><button type="button" className="btn btn-lg">Upload a MEME</button> </a>
        </div>
        <div className="landing col-lg-6 col-md-12 col-sm-12">
        <img className="saltbae" src="saltbae.png"/>
        </div>
    </div>
  </div>);
}

export default LandingPage;
