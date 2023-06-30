import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Mainvisual from "../../components/mainvisual/mainvisual";
import About from "../../components/about/about";
import Challenge from "../../components/challenge/challenge";
import Website from "../../components/website/website";
import Footer from "../../components/footer/footer";
import ScrollReveal from 'scrollreveal';

export default function Home() {
  useEffect(() => {
    ScrollReveal().reveal('.headline', {
      origin: 'bottom',
      distance: '40px',
      duration: 1200,
      interval: 200,
      scale: 0.9,
      viewFactor: 0.1
    });
  }, [])
  return (
    <div className="home-page">
      <Header />
      <Mainvisual />
      <About />
      <Challenge />
      <Website />
      <Footer />
    </div>
  );
}
