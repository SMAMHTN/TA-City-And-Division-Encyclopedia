import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

// Components
import Card from "../components/Card";

export default function Division() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions",
          {
            headers: {
              "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
              "x-rapidapi-key":
                "0ad0e78e7dmsh7ac78f1399d8c56p1ed9efjsn1c9063a1643e",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <div className="title">Division Name</div>
      {!data || isLoading ? (
        <p >Loading...</p>
      ) : (
        <div className="card-container">
          {data.data.map((item, index) => {
            return (
              <article key={index}>
                <Link to={`/divisiondetail/${index}`}>
                  <Card data={item} key={index} />
                </Link>
              </article>
            );
          })}
        </div>
      )}
      <p class="agartidaktenggelam"></p>
    </main>
  );
}