import React from "react";

const day = new Date();
const year = day.getFullYear();

function Footer() {
  return (
  <div className="container-fluid">
  <footer>
  <a href="https://www.instagram.com/lsacbucuresti/"><i className="icon fa-brands fa-instagram"></i></a>
  <a href="https://www.twitch.tv/lsac_bucuresti"><i className="icon fa-brands fa-twitch"></i></a>
  <a href="https://www.facebook.com/LsacBucuresti/"><i className="icon fa-brands fa-facebook"></i></a>
  <p>Copyright {year} | La muncă, nu la întins mâna.</p>
  </footer>
  </div>
  );
}

export default Footer;

