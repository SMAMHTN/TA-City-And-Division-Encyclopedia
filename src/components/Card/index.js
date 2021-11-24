import React from "react";

import "./index.css";

export default function index({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {data ? (
        <>
            <div ClassName="judul">
            <h1>{data.name}</h1>
            </div>
            
          <div ClassName="aaa">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Blank_Map_World_Secondary_Political_Divisions.svg/400px-Blank_Map_World_Secondary_Political_Divisions.svg.png"} alt={data.country} />
          </div>
          <div className="card-info">
            <h3>Division : {data.name}</h3>
            <p>Region : {data.region}</p>
          </div>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}