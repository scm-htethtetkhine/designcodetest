import React from "react";
import "./mainvisual.css";

export default function Mainvisual() {
  return (
    <div className="mainvisual" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/mainvisual/main-visual.png'})`
    }}>
      <div className="overlay"></div>
      <div className="mainvisual-text">
        <h1 className="text-center text-white font-normal headline">TRIPPRO - AN ECOMMERCE SOLUTION</h1>
        <p className="text-center text-white py-5 headline">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam<br>
        </br> voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        <div className="text-gp flex justify-center text-white pb-5">
          <div className="flex items-center border-right">
            <p className="pr-3 headline font-bold">Built for:</p>
            <div><img className="img mx-auto headline" src="/assets/mainvisual/responsive.png" alt="" /></div>
          </div>
          <div className="flex items-center border-right">
            <p className="pr-3 headline font-bold"><span className="font-normal">Technologies:</span><br></br>Wordpress</p>
            <div><img className="img mx-auto headline" src="/assets/mainvisual/wordpresslogo.png" alt="" /></div>
          </div>
          <div className="flex items-center">
            <p className="pr-3 headline font-bold"><span className="font-normal">Industry:</span><br></br>Ecommerce</p>
            <div><img className="img mx-auto headline" src="/assets/mainvisual/shopping-cart.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
