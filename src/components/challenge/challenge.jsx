import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import "./challenge.css";

export default function Challenge() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const data = res.data;
      setData(data);
    })
  }, [])
  return (
    <div className="challenge pb-5 pt-5">
      <div className="inner">
        <div className="challenge-gp flex items-center justify-between">
          <div className="challenge-image headline">
            <img className="img mx-auto" src="/assets/challenge/challenge.png" alt="" />
          </div>
          <div className="challenge-text">
            <h2 className="pb-5 headline">OUR <span className="pr-3">CHALLENGES</span><span className="red-text pl-5 headline">Please integrate this component with api.</span></h2>
            <ul className="list-gp mt-5 headline">
              <Fragment>
                {
                  data.slice(0, 5).map((d) => (
                    <li key={d.id} className="border px-5 py-3 mb-5 shadow-xl">
                      <a className="flex items-center">
                        <span className="id-num">0{d.id}</span>
                        <span className="pl-3">{d.title}</span>
                      </a>
                    </li>
                  ))
                }
              </Fragment>
            </ul>
            <button className="mt-5 headline font-bold">VIEW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
