import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about mb-5">
      <div className="inner">
        <img className="img mx-auto headline" src="/assets/about/laptop.png" alt="" />
        <div className="about-gp flex items-center justify-between">
          <div className="about-text">
            <h2 className="headline">ABOUT <span>TRIPPRO</span><span className="b-border"></span></h2>
            <p className="py-5 headline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy</p>
            <button className="headline font-bold">TOUR TO WEBSITE</button>
          </div>
          <div className="about-image headline">
            <img className="img mx-auto" src="/assets/about/tablet.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
