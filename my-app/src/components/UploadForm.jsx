import React from "react";


function UploadForm() {
  return (
<div className="container-fluid upload-page" id="upload">
  <div class="box">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
            <h1>Ai tupeu și crezi că ești amuzant?</h1>
            <p>Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.</p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <form>
            <div className="form-group form-description">
              <label for="descriere">Descriere:</label>
              <input type="text" className="form-control" id="InputDescriere" placeholder="descriere"></input>
            </div>
            <div className="form-group form-imagine">
            <label for="meme">Meme (jpg, jpeg, png, gif)</label>
            <input type="file" className="form-control uploader" placeholder="drag & drop image or click to upload" id="meme" name="meme" accept=".png, .jpg, .jpeg, .gif"></input>
          </div>
          <div className="submitButton"><button type="submit" class="btn">Trimite</button></div>
          </form>
        </div>
    </div>
  </div>
</div>
  );
}

export default UploadForm;
