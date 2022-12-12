import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import UploadFrom from "./UploadForm";

function App() {
  return (
    <div>
	<Navbar />
	<LandingPage />
  <UploadFrom />
  <Footer />
    </div>
  );
}

export default App;