import React, { useState } from 'react';
import "./website.css";

export default function Website() {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleToggle = () => {
    setIsMobileView(!isMobileView);
  };

  return (
    <div className="website mt-5">
      <div className="inner">
        <div className="flex items-center justify-between">
          <div className="image-container headline">
            <img
              src={isMobileView ? '/assets/website/desktop.png' : '/assets/website/mobile.png'}
              alt={isMobileView ? 'Mobile' : 'Desktop'}
            />
          </div>
          <div className="website-text">
            <h2 className="pb-5 headline">Their Old Website & Problems</h2>
            <ul className="pb-5">
              <li className="pb-4 headline" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/website/arrow.png'})`
              }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam</li>
              <li className="pb-4 headline" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/website/arrow.png'})`
              }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam</li>
              <li className="headline" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/website/arrow.png'})`
              }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam</li>
            </ul>

            <button className="w-44 h-10 mt-5 rounded-full flex items-center headline" onClick={handleToggle}>
              <span
                className={`block w-5 h-5 rounded-full transform transition-transform ${isMobileView ? 'translate-x-20' : 'translate-x-0'
                  } ${isMobileView ? 'bg-white' : 'bg-white'}`}
              ></span>
              <p>{isMobileView ? 'Desktop' : 'Mobile'}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



