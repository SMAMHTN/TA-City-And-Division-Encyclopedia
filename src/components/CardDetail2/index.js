import React from "react";

import "./index.css";

export default function index({ data, onClick }) {
  return (
    <div className="card3" onClick={onClick}>
      {data ? (
        <>
            <div ClassName="judul">
            <h1>{data.name}</h1>
            </div>
            
          <div ClassName="aaa">
            {/* switch ({data.name}) {
              case "Leskovik":
                <img src={"https://i.nona.net/locmap_LESKOVIK_20.4292222X40.0313889X20.7652222X40.2713889.png"} alt={data.name} />
                break;
            
              default:
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Blank_Map_World_Secondary_Political_Divisions.svg/400px-Blank_Map_World_Secondary_Political_Divisions.svg.png"} alt={data.name} />
                break;
            } */}
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Blank_Map_World_Secondary_Political_Divisions.svg/400px-Blank_Map_World_Secondary_Political_Divisions.svg.png"} alt={data.name} />
          </div>
          <div className="card-info">
            <h3>City Name : {data.name}</h3>
            <p>Origin Country : {data.country}/{data.countryCode}</p>
            <p>Region : {data.region}/{data.regionCode}</p>
            <p>City Latitude : {data.latitude}</p>
            <p>City Longtitude : {data.longitude}</p>
            <p>City Population : {data.population}</p>
          </div>
        </>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}