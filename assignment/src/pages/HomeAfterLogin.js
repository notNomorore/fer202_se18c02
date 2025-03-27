import Header from "../components/Header";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contents from "../components/ContentsLog";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"

function HomeAfterLogin() {
  return (
    <div>
      <Navigation />
      <Header />
      <Contents />
      <Footer />
    </div>
  );
}
export default HomeAfterLogin;    