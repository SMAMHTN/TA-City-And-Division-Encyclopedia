import React, { useEffect, useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
import { useParams} from "react-router-dom";
import axios from "axios";
import "./style.css";

import CardDetail from "../components/CardDetail";

export default function DivisionDetail(){
    const { index } = useParams();
    const [indexused] = useState(index) ;
    // return <h1>{indexused}</h1>
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
        {!data || isLoading ? (
            <p>Loading...</p>
        ) : (
            <div className="card-container">
                {data.data.map((item, index) => {
                    return (
                        <>
                        { index==indexused ?(
                            <CardDetail data={item} key={index} />
                        ) : (
                            <p></p>
                        )
                }</>
                    );
                })}
            </div>
        )}
        <p class="agartidaktenggelam"></p>
        </main>
        
    );
}