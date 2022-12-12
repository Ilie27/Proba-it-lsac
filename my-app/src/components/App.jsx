import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import UploadFrom from "./UploadForm";
import MostViewed from "./MostViewed";

function App() {
  return (
    <div>
	<Navbar />
	<LandingPage />
  <UploadFrom />
  <MostViewed />
  <Footer />
    </div>
  );
}

export default App;